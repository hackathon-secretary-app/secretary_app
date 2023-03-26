import sys
sys.dont_write_bytecode = True

from fastapi import FastAPI
from routers.map import router
from starlette.middleware.cors import CORSMiddleware


app = FastAPI()

# CORS設定
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
