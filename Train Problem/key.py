import requests
import json

# API endpoint URL
url = "http://104.211.219.98/train/register"

# Request payload
payload = {
    "companyName": "BRUTAL Train Central",
    "ownerName": "Sayan Pramanik",
    "rollNo": "39110913",
    "ownerEmail": "sayanpramanik2012@gmail.com",
    "accessCode": "siuzyt",
}

# Send POST request
response = requests.post(url, json=payload)

# Check response status code
if response.status_code == 200:
    # Parse response JSON
    response_data = response.json()

    # Write response data to a JSON file
    with open("response.json", "w") as file:
        json.dump(response_data, file)

    print("Company registered successfully! Response saved in response.json")
else:
    print("Registration failed. Error:", response.text)
