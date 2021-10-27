from typing import Dict, Any, Type
from typing import List, Optional
from datetime import datetime, date

from pydantic import BaseModel, Field

class Persons(BaseModel):
    id_person: int
    name: str
    mentions: int
    popularity: int

    class Config:
        orm_mode = True
        allow_mutation = True