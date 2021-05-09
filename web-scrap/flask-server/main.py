from flask import (Flask, rentder_template)

app = Flask("__main__")

@app.route("/")
def index():
    return render_template("index.html")
