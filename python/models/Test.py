from database import Base
from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import relationship


class Test(Base):
    __tablename__="test"

    id = Column(Integer, primary_key=True, autoincrement=True, unique=True)
    name = Column(String(256), nullable=False)
