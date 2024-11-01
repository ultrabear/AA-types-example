from typing import TypedDict


# GET /api/users/:id
class GetUser(TypedDict):
    id: int
    name: str


# GET /api/birthdays/:id
class Birthdays(TypedDict):
    id: int
    birthday: str
