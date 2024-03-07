from auth.jwt_handler import sign_jwt
from database.database import add_admin
from fastapi import APIRouter, Body, HTTPException
from models.admin import Admin
from passlib.context import CryptContext
from schemas.admin import AdminData, AdminSignIn

router = APIRouter()

hash_helper = CryptContext(schemes=["bcrypt"])


@router.post("/login")
async def admin_login(admin_credentials: AdminSignIn = Body(...)):
    admin_exists = await Admin.find_one(Admin.email == admin_credentials.username)
    if admin_exists:
        password = hash_helper.verify(admin_credentials.password, admin_exists.password)
        if password:
            return sign_jwt(admin_credentials.username)

        raise HTTPException(status_code=403, detail="Incorrect email or password")

    raise HTTPException(status_code=403, detail="Incorrect email or password")


@router.post("", response_model=AdminData)
async def admin_signup(admin: Admin = Body(...)):
    admin_exists = await Admin.find_one(Admin.email == admin.email)
    if admin_exists:
        raise HTTPException(
            status_code=409, detail="Admin with email supplied already exists"
        )

    admin.password = hash_helper.encrypt(admin.password)
    new_admin = await add_admin(admin)
    return new_admin
