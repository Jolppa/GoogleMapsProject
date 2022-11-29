from flask import Flask, request
import json
from scraper import get_data
from flask_cors import CORS
import requests


api = Flask(__name__)
CORS().init_app(api)

# get POST request body
@api.route("/api/scraper", methods=["POST"])
def fetch_data():
    form_data = request.get_json()
    address = form_data["address"]
    business_type = form_data["businessType"]
    radius = form_data["radius"]
    # get_data(address, business_type, radius)     
    data = get_data(address, business_type, radius)
    return json.dumps({"success": True, "data": data}), 200, {"ContentType": "application/json"}


if __name__ == "__main__":
    api.run(debug=True)


    
    