from auth.jwt_bearer import JWTBearer
from database.project import add_project, update_project
from fastapi import APIRouter, Body, Depends, HTTPException
from models.project import ProjectCreate, ProjectUpdate

project_router = APIRouter(dependencies=[Depends(JWTBearer())])


@project_router.post("/")
async def project_create(project: ProjectCreate = Body(...)):
    try:
        await add_project(project)
        {"msg": "Created Success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@project_router.put("/{:id}")
async def project_update(project: ProjectUpdate = Body(...)):
    try:
        await update_project(id, project)
        return {"msg": "Updated Success"}
    except ValueError as ve:
        raise HTTPException(status_code=404, detail=ve.args[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
