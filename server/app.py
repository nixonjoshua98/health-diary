import os, json, random, requests, threading

from flask import Flask, request, Response

from waitress import serve

app = Flask(__name__)

class Quotes:
    _url = "https://jsonblob.com/api/jsonBlob/23ac4c86-6f81-11ea-afda-bf3145a40a35"
    _quotes = []

    @classmethod
    def create_default(cls) -> None:
        cls.add_quote(text="Have an awesome Day!")
        cls.add_quote(text="You are doing great, and it will keep getting better!")
        cls.add_quote(text="Awesome job today! Keep it up :)")
        cls.add_quote(text="Today is your day!")


    @classmethod
    def backup(cls):
        def process():
            headers = requests.utils.default_headers()

            quotes = {"quotes": cls._quotes}

            r = requests.put(cls._url, headers=headers, json=json.dumps(quotes))

            print("Backup Status:", r.status_code)

        t = threading.Thread(target=process, daemon=False)

        t.start()

    @classmethod
    def download(cls):
        headers = requests.utils.default_headers()

        r = requests.get(cls._url, headers=headers)

        for ele in json.loads(r.json())["quotes"]:
            cls.add_quote(text=ele["Text"])

    @classmethod
    def add_quote(cls, *, text: str) -> bool:
        cls._quotes.append(dict(Text=text))

        return True

    @classmethod
    def get_quotes(cls, *, amount: int) -> dict:
        amount = min(min(15, amount), len(cls._quotes))

        return random.sample(cls._quotes, amount)        


   
@app.route("/get/")
def get_quote():
    quotes = Quotes.get_quotes(amount=15)
    
    return json.dumps({i : q for i, q in enumerate(quotes)})


@app.route("/set/", methods=["POST"])
def submit_quote():   
    data = request.get_json()

    if data is not None:
        Quotes.add_quote(text=data["Text"])

        Quotes.backup()

    return Response(status=200)    
    

if __name__ == "__main__":
    Quotes.download()
    
    serve(app, host="192.168.0.74", port=int(os.getenv("PORT", 5000)))
