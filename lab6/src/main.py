from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources=r'/*')

@app.route('/signup', methods=["GET","POST"])
def signup():
    if request.method == 'POST':
        req = request.get_json()
        print(req)
        return {"msg":"注册成功"}
    
if __name__ == '__main__':
    app.run(host='127.0.0.1',port=5000)