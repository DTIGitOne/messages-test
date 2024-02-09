let messageInput1 = document.getElementById("messageInput1");
let sendMessage1 = document.getElementById("sendMessage1");
let messageInput2 = document.getElementById("messageInput2");
let sendMessage2 = document.getElementById("sendMessage2");
let messages = document.getElementById("messages");
let messageInput = document.getElementById("messageInput");
let msgInput = document.getElementById("msgInput");

let phoneWidth = messages.offsetWidth;

let typeingCounter = 0; 

let sendingTextBox = document.createElement("div");

$(messageInput1).keydown(function(event) {
   typeingCounter++

   if (typeingCounter === 1) {

      sendingTextBox.className = "sendMessage";
         msgInput.append(sendingTextBox);
   }
});

$(messageInput1).keyup(function(event) {
      
         typeingCounter = 0
         sendingTextBox.remove();

});

sendMessage1.addEventListener('click' , function(){

   if (messageInput1 === "") {
      console.log("error");
   } else {

      let meassageDiv1 = document.createElement("div");
      meassageDiv1.className = "meassageDiv1";
      messages.append(meassageDiv1);

      let meassage1 = document.createElement("p");
      meassage1.className = "message1";
      meassage1.innerHTML = messageInput1.value;
      meassageDiv1.append(meassage1);

      let message1Height = meassage1.clientHeight;

      let markDiv = document.createElement("div");
      markDiv.className = "checkmark1";
      markDiv.style.height = message1Height + "px";
      meassageDiv1.append(markDiv)

      let checkmark = document.createElement("div");
      checkmark.className = "checkmark material-icons";
      checkmark.innerHTML = "check";
      markDiv.prepend(checkmark);

   }
});

sendMessage2.addEventListener('click' , function(){

   if (messageInput2 === "") {
      console.log("error");
   } else {
      
      let meassageDiv2 = document.createElement("div");
      meassageDiv2.className = "meassageDiv2";
      messages.append(meassageDiv2);

      let meassage2 = document.createElement("p");
      meassage2.className = "message2";
      meassage2.innerHTML = messageInput2.value;
      meassageDiv2.append(meassage2);

      let message2Height = meassage2.clientHeight;

      let markDiv = document.createElement("div");
      markDiv.className = "checkmark2";
      markDiv.style.height = message2Height + "px";
      meassageDiv2.prepend(markDiv)

      let checkmark = document.createElement("div");
      checkmark.className = "checkmark material-icons";
      checkmark.innerHTML = "check";
      markDiv.prepend(checkmark);
   }
});
