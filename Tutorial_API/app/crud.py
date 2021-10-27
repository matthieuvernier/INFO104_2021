from sqlalchemy.orm import Session
from sqlalchemy import and_

from . import models, schemas

def get_persons(db: Session, name: str):
    return db.query(models.Persons).filter(models.Persons.name == name).all()
