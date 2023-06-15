import requests
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/numbers", methods=["GET"])
def get_numbers():
    urls = request.args.getlist("url")
    numbers = []

    for url in urls:
        try:
            response = requests.get(url, timeout=0.5)  # Set the timeout to 0.5 seconds
            if response.status_code == 200:
                data = response.json()
                if "numbers" in data:
                    numbers.extend(data["numbers"])
        except requests.Timeout:
            pass  # Handle the timeout by skipping the request

    unique_numbers = sorted(set(numbers))

    return jsonify({"numbers": unique_numbers})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
