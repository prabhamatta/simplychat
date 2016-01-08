
    var ws;

    function init() {
      var connectionEstablished = false;
      var name = Math.random().toString(36).substr(2,5)
      $("#chatid").text(name);

      // Connect to Web Socket
      ws = new WebSocket("ws://0.0.0.0:9001/");

      // Set event handlers.
      ws.onopen = function() {
        connectionEstablished = true;
        jsonObj = serverNotification("connected");
        ws.send(jsonObj);
        output(jsonObj);
      };

      ws.onmessage = function(e) {
        // e.data contains received string.
        console.log("Mesg Received" + e.data)
        output(e.data);
      };

      ws.onclose = function(){
        if (connectionEstablished === true){
          jsonObj = serverNotification("left");
        }
        else{
          jsonObj = serverNotification("Connection Failed");
        }
        document.getElementById("input").disabled=true;
        output(jsonObj);
      };

      ws.onerror = function(e) {
        jsonObj = getMessage("error");
        output(jsonObj);
        console.log(e)
      };

    }

    function serverNotification(text){
      var mesg = {};
      mesg["name"] = "Server Notification";
      mesg["text"] = document.getElementById("chatid").innerHTML + " " + text;
      jsonObj = JSON.stringify(mesg);
      return jsonObj;

    }

    function getMessage(text){
      var mesg = {};
      mesg["name"] = document.getElementById("chatid").innerHTML;
      mesg["text"] = text;
      jsonObj = JSON.stringify(mesg);
      return jsonObj;
    }

    function onSendClick() {
      // debugger;
      var input = document.getElementById("input");
      jsonObj = getMessage(input.value);
      ws.send(jsonObj);
      output(jsonObj);
      input.value = "";
      input.focus();
    }

    function onCloseClick() {
      jsonObj = serverNotification("left");
      ws.send(jsonObj);
      ws.close();
      document.getElementById("input").disabled=true;
    }

    function output(str) {
      // debugger;
      mesg = JSON.parse(str);
      var log = document.getElementById("log");
      var escaped = mesg["text"].replace(/&/, "&amp;").replace(/</, "&lt;").replace(/>/, "&gt;").replace(/"/, "&quot;");
      log.innerHTML = mesg["name"] + ": " + escaped + "<br>" + log.innerHTML;
    }