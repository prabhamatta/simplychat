
    var ws;

    function init() {
      var name = Math.random().toString(36).substr(2,5)
      $("#chatid").text(name);


      // Connect to Web Socket
      ws = new WebSocket("ws://localhost:9001/");

      // Set event handlers.
      ws.onopen = function() {
        json_obj = serverNotification("connected");
        ws.send(json_obj);
        output(json_obj);
      };

      ws.onmessage = function(e) {
        // e.data contains received string.
        console.log("Mesg Received" + e.data)
        output(e.data);
      };

      ws.onclose = function() {
        json_obj = serverNotification("left");
        output(json_obj);
      };

      ws.onerror = function(e) {
        json_obj = getMessage("error");
        output(json_obj);
        console.log(e)
      };

    }

    function serverNotification(text){
      var mesg = {};
      mesg["name"] = "Server Notification";
      mesg["text"] = document.getElementById("chatid").innerHTML + " " + text;
      json_obj = JSON.stringify(mesg);
      return json_obj;

    }

    function getMessage(text){
      var mesg = {};
      mesg["name"] = document.getElementById("chatid").innerHTML;
      mesg["text"] = text;
      json_obj = JSON.stringify(mesg);
      return json_obj;
    }

    function onSendClick() {
      // debugger;
      var input = document.getElementById("input");
      json_obj = getMessage(input.value);
      ws.send(json_obj);
      output(json_obj);
      input.value = "";
      input.focus();
    }

    function onCloseClick() {
      json_obj = serverNotification("left");
      ws.send(json_obj);
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