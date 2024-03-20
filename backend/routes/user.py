import firebase_admin
from auth.jwt_handler import sign_jwt
from database.database import add_user
from fastapi import APIRouter, Body, HTTPException
from firebase_admin import auth, credentials
from models.user import User
from passlib.context import CryptContext
from schemas.user import UserRegister

router = APIRouter()
loggedInRouter = APIRouter()


hash_helper = CryptContext(schemes=["bcrypt"])

cred = credentials.Certificate("./firebase-admin.json")
firebase_admin.initialize_app(cred)


async def get_user_info(user_id_token: str):
    decoded_token = auth.verify_id_token(user_id_token)
    uid = decoded_token["uid"]
    user_name = decoded_token["name"]
    user_email = decoded_token["email"]
    return uid, user_name, user_email


async def find_or_create_user(uid: str, user_name: str, user_email: str):
    user_exists = await User.find_one(User.uid == uid)
    if user_exists is None:
        await add_user(User(uid=uid, user_name=user_name, user_email=user_email))
    return uid


@router.post("/login")
async def user_login(user: UserRegister = Body(...)):
    try:
        uid, user_name, user_email = await get_user_info(user.id_token)
        return sign_jwt(await find_or_create_user(uid, user_name, user_email))
    except Exception as e:
        raise HTTPException(status_code=403, detail=str(e))
