from beanie import Document


class User(Document):
    uid: str
    user_name: str
    user_email: str

    class Config:
        json_schema_extra = {
            "example": {
                "uid": "12345",
                "user_name": "Patrick",
                "user_email": "patrick@gmail.com",
            }
        }

    class Settings:
        name = "user"
