from flask import Flask, Blueprint

from .api import GetUser, Birthdays

app = Flask(__name__)


api = Blueprint("api", __name__, url_prefix="/api")


@api.get("/users/<int:id>")
def getUser(id: str) -> GetUser:
    actual_id = int(id)

    if actual_id == 1:
        return {"id": 1, "name": "Ultrabear"}
    else:
        raise Exception()


@api.get("/birthdays/<int:id>")
def getBirthdays(id: str) -> Birthdays:
    actual_id = int(id)

    if actual_id == 1:
        return {"id": 1, "birthday": "2010-10-5"}
    else:
        raise Exception()


app.register_blueprint(api)
