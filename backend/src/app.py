from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the paceMind backend!"})

@app.route('/api/status')
def status():
    return jsonify({"message": "Backend is running!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000, debug=True)