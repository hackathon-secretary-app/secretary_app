import sys
sys.dont_write_bytecode = True

from fastapi import FastAPI
from routers.map import router

import sys
sys.dont_write_bytecode = True
import os

os.environ["PYTHONDONTWRITEBYTECODE"] = "1"

app = FastAPI()

app.include_router(router)
