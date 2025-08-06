# from flask import Flask, jsonify
# import os

# def create_app(test_config=None):
#     # create and configure the app
#     app = Flask(__name__, instance_relative_config=True)
#     app.config.from_mapping(
#         SECRET_KEY='dev',
#         DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
#     )
#     from . import db
#     db.init_app(app)

#     if test_config is None:
#         # load the instance config, if it exists, when not testing
#         app.config.from_pyfile('config.py', silent=True)
#     else:
#         # load the test config if passed in
#         app.config.from_mapping(test_config)

#     # ensure the instance folder exists
#     try:
#         os.makedirs(app.instance_path)
#     except OSError:
#         pass

    # @app.route('/hello')
    # def hello():
    #     return 'Hello, World!'
    
    # @app.route("/")
    # def home():
    #     return jsonify({"message": "Welcome to the paceMind backend!"})

    # @app.route('/api/status')
    # def status():
    #     return jsonify({"message": "Backend is running!"})

#     return app

# if __name__ == "__main__":
#     app = create_app()
#     app.run(host="0.0.0.0", port=4000, debug=True)
from flask import Flask, jsonify
import os

def create_app():
    app = Flask(__name__)
    
    # Configuration
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
    
    # Ensure instance folder exists
    os.makedirs(app.instance_path, exist_ok=True)
    
    # Routes
    @app.route('/')
    def home():
        return {"message": "Welcome!"}
    
    @app.route('/api/status')
    def status():
        return jsonify({"message": "Backend is running!"})
    
    return app