# SimplyChat
Python Websocket Chat App

##Step1
Download this code

##Step2
```
cd simplychat
source venv/bin/activate
pip install websocket_server
python server.py
```

##Step3
To start a client, on a new terminal
```
cd simplychat
python -m SimpleHTTPServer
```
In web browser, open `http://localhost:8000/client.html` to chat


##Step4
In another tab, open `http://localhost:8000/client.html` to chat as different client


####Note: Chrome seems to have some issues with websocket connections. Try it is Safari.
