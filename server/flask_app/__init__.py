from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
bcrypt=Bcrypt(app)
app.secret_key = 'solo project'