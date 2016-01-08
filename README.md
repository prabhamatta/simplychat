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

##Step4
To start another client, on another terminal
```
cd simplychat
python -m SimpleHTTPServer
```

Now open `http://localhost:8000/client.html` to chat
####Note: Chrome seems to have some issues with python2.7 websocket_server, try it in safari
