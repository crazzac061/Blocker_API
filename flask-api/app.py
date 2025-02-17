from flask import Flask, jsonify, request

app=Flask(__name__)

blocked_sites= ["https://www.instagram.com","https://www.messenger.com"]

@app.route ('/get_blocklist',method=['GET'])

def get_blocklist():
    return jsonify({"blocked_sites":blockeds_sites})

@app.route('/add_block',method=['POST'])

def add_block():
    data =request.json
    url=data.get("url")
    if url and url not in blocked_sites:
        blocked_sites.append(url)
        return jsonify ({"message":"Site Added!!","blocked_sites":blocked_sites}),200
    return jsonify({"message":"Invalid or duplicate  URl"}),400
@app.route('/remove_block',method=['Post'])

def remove_block():
    data= request.json
    url=data.get("url")
    if url in blocked_sites:
        blocked_sites.remove(url)
        return jsonify({"message":"Site remmoved!!","blocked_sites":blocked_sites}),200
    return jsonify({"message":"Site not found"})
if __name__=='__main__':
    app.run(host='0.0.0.0',port=5000,debug=Trure)
