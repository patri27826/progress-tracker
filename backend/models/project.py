from typing import List, Optional

from beanie import Document
from pydantic import UUID4, Field

from .base_entity import BaseEntity


class Status(BaseEntity):
    name: str
    order: int = Field(default=1)
    description: Optional[str]

    class Settings:
        name = "status"


class UserStatus(BaseEntity):
    user_id: UUID4
    status_id: UUID4
    comment: str

    class Settings:
        name = "user_status"


class Project(BaseEntity):
    name: str
    owner_id: UUID4
    member_list: List[UUID4]
    status_list: List[Status]
    status_entity: List[UserStatus]

    class Settings:
        name = "projects"


class ProjectCreate(Document):
    name: str
    owner_id: UUID4
    member_list: List[UUID4]
    status_list: List[Status]
    status_entity: List[UserStatus]


class ProjectUpdate(Document):
    name: Optional[str]
    owner_id: Optional[UUID4]
    member_list: Optional[List[UUID4]]
    status_list: Optional[List[Status]]
    status_entity: Optional[List[UserStatus]]


class ProjectDelete(Document):
    pass
