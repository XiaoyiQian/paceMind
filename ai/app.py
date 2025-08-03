from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    # Placeholder: receive performance data, return mock prediction
    data = request.json
    # TODO: Replace with real ML model inference
    prediction = {"next_run_time": "22:15", "message": "AI prediction coming soon"}
    return jsonify(prediction)

if __name__ == "__main__":
    app.run(port=5000)