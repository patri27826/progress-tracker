from fastapi import APIRouter

router = APIRouter()


@router.post("/verify")
async def user_login():
    return
