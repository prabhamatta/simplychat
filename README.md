# SimplyChat
A Simple Python WebSocket Chat App

##Step1 : Installation
```
git clone https://github.com/prabhamatta/simplychat.git
cd simplychat
virtualenv venv
source venv/bin/activate
pip install websocket_server
```

##Step2: Running the server
In a terminal,
```
cd simplychat
source venv/bin/activate
python server.py
```
In another terminal,
```
cd simplychat
python -m SimpleHTTPServer
```

##Step3: Running clients
Now our server is ready for chatting!!!
In web browser, open `http://localhost:8000/chat.html` to chat

##Step4
To chat as a different user,
open `http://localhost:8000/chat.html` in another tab


####Note: Chrome seems to have some issues with websocket connections. Try it is Safari.
