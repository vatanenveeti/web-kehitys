from flask import Flask

app = Flask(__name__)
@app.route('/helloworld/<kerrat>')

def helloworld(kerrat):
    try:
        kerrat = int(kerrat)
        i = 0
        response = ""
        for i in range(kerrat):
            response += "Hello world! "
            i += 1
        return response
    except ValueError:
        return "Virheellinen komento."

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)