import os
import json
import random

import psycopg2
import psycopg2.extras

from flask import Flask, request, Response

from waitress import serve

app = Flask(__name__)

@app.route("/get/", methods=["GET"])
def get_quote():
    #with psycopg2.connect(user="postgres", password="postgres", host="localhost", port="5432", database="cpddb") as con:
    with psycopg2.connect(os.environ["DATABASE_URL"], sslmode="require") as con:
        cur = con.cursor(cursor_factory=psycopg2.extras.NamedTupleCursor)

        cur.execute("SELECT * FROM quotes;")

        quotes = cur.fetchall()

    quotes = random.sample(quotes, min(50, len(quotes)))
    
    data = json.dumps({i : {"Text": q.text} for i, q in enumerate(quotes)})
                           
    return data


@app.route("/set/", methods=["POST"])
def submit_quote():   
    data = request.get_json()

    if data is not None:
        #with psycopg2.connect(user="postgres", password="postgres", host="localhost", port="5432", database="cpddb") as con:
        with psycopg2.connect(os.environ["DATABASE_URL"], sslmode="require") as con:
            cur = con.cursor(cursor_factory=psycopg2.extras.NamedTupleCursor)

            cur.execute("INSERT INTO quotes (text) VALUES(%s);", (data["Text"],))

    return Response(status=200)    
    

if __name__ == "__main__":
    #with psycopg2.connect(user="postgres", password="postgres", host="localhost", port="5432", database="cpddb") as con:
    with psycopg2.connect(os.environ["DATABASE_URL"], sslmode="require") as con:
        cur = con.cursor(cursor_factory=psycopg2.extras.NamedTupleCursor)

        cur.execute("CREATE TABLE IF NOT EXISTS quotes(id SERIAL PRIMARY KEY NOT NULL, text VARCHAR(255));")

    host = "0.0.0.0"  # "192.168.0.74"
    
    serve(app, host=host, port=int(os.getenv("PORT", 5000)))
