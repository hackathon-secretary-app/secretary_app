import sys
sys.dont_write_bytecode = True

from fastapi import FastAPI
from routers.map import router


app = FastAPI()

app.include_router(router)
