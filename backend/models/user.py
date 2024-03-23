from .base_entity import BaseEntity


class User(BaseEntity):
    uid: str
    user_name: str
    user_email: str

    class Settings:
        name = "user"
