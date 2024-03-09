# progress-tracker

To use the application, follow the outlined steps:

## Run the Application
```console
$ docker-compose up --build
```

## Run the frontend
1. Install [pnpm](https://pnpm.io/zh-TW/)
2. 
```console
pnpm install
pnpm start
```

## Run the backend
1. You need to run mongoDB first
2. 
```console
$  pip install poetry
$  poetry install
$  uvicorn app:app --host 0.0.0.0 --port 8080
```

## Before you submit you commit, please install pre-commit
```console
$  pip install pre-commit
$  pre-commit install --install-hooks
```
