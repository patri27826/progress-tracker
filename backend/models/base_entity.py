from datetime import datetime
from typing import Optional

from beanie import Document
from pydantic import UUID4


class BaseEntity(Document):
    id: UUID4
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    deleted_at: Optional[datetime]
