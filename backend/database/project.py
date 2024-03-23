import uuid

from models.project import Project, ProjectCreate
from pydantic import UUID4
from services.common import create_new_entity

project_collection = Project


async def new_project(data: ProjectCreate):
    _id, created_at, updated_at = create_new_entity()
    project_data = data.model_dump()
    project_data["id"] = _id
    project_data["created_at"] = created_at
    project_data["updated_at"] = updated_at
    project_data["deleted_at"] = None
    return Project(**project_data)


async def add_project(data: ProjectCreate) -> None:
    new_project = await new_project(data)
    await project_collection.create(new_project)


async def update_project(id: UUID4, data: dict) -> None:
    des_body = {k: v for k, v in data.items() if v is not None}

    if not des_body:
        raise ValueError("No fields to update")

    project = await project_collection.get(id)
    if not project:
        raise ValueError("Project with this id does not exist")

    updated_project = await project.update({"$set": des_body})

    if not updated_project:
        raise ValueError("Failed to update the project")
