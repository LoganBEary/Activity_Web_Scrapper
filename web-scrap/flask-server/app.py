from flask import Flask, render_template, abort, request, jsonify, json, redirect, url_for, session
import os
import sys

sys.path.append('../pythonCode')
import scrapper as scp

app = Flask("__main__")
app.secret_key=os.urandom(36).hex()

@app.route("/")
@app.route("/index", methods=['POST'])
def index():
    return render_template("index.html")

@app.route("/")
@app.route("/choices", methods=['POST', 'GET'])
def choices():
    #session['currentZip'] = request.get_json()
    #need to fix double print of zip info
    request_data = session.get('currentZip', None)
    zipcode = request_data['enteredZip']
    scp.scrape_zip_code(zipcode)
    #return render_template("choices.html")

@app.route("/reroute", methods=['POST', 'GET'])
def reroute():
    session['currentZip'] = request.get_json()
    #return (redirect(url_for('choices')))

if __name__ == "__main__":
    app.run(debug=True)