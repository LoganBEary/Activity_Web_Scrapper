from flask import Flask, render_template, abort, request, jsonify, json, redirect, url_for, session
import os
import sys
from flask_cors import CORS

sys.path.append('../pythonCode')
import scrapper as scp

app = Flask("__main__")
cors = CORS(app)
data = []
app.secret_key=os.urandom(36).hex()

@app.route("/")
@app.route("/index", methods=['POST'])
def index():
    return render_template("index.html")

@app.route("/")
@app.route("/choices", methods=['POST', 'GET'])
def choices():
    global data
    if request.method == 'POST':
        session['currentZip'] = request.get_json()
    #need to fix double print of zip info
        request_data = session.get('currentZip', None)
        zipcode = request_data['enteredZip']
        data = scp.scrape_zip_code(zipcode)
        return 'Data Collected'
    else:
        return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)