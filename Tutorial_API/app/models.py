from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text,Date
from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import hybrid_property
import ast
from .database import Base #Se importa el objeto Base desde el archivo database.py
import unidecode
import string
 
class Persons(Base): 

    __tablename__ = "persons"

    id_person = Column(Integer, primary_key=True, index=True)
    name = Column(Text(), unique=False, index=False)
    mentions = Column(Integer(), unique=False, index=False)
    popularity = Column(Integer(), unique=False, index=False)