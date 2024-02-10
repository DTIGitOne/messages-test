let messageInput1 = document.getElementById("messageInput1");
let sendMessage1 = document.getElementById("sendMessage1");
let messageInput2 = document.getElementById("messageInput2");
let sendMessage2 = document.getElementById("sendMessage2");
let messages = document.getElementById("messages");
let messageInput = document.getElementById("messageInput");
let msgInput = document.getElementById("msgInput");
let usernameInput = document.getElementById("usernameInput");
let usernameClick = document.getElementById("usernameClick");
let usernameBox = document.getElementById("usernameBox");
let left = document.getElementById("left");

let goBackButton = document.createElement("div");

usernameClick.addEventListener("click" , function () {

   goBackButton.innerHTML = "go back";
   goBackButton.className = "cursor-pointer";
   left.prepend(goBackButton);
 
   usernameClick.style.visibility = "hidden";
   usernameInput.style.visibility = "visible";
});

goBackButton.addEventListener("click" , function (){
   goBackButton.remove();
   usernameInput.style.visibility = "hidden";
   usernameClick.style.visibility = "visible";
})


$(document).ready(function(){
   $('input').keypress(function(event){
       if(event.which === 13){
         usernameBox.innerHTML = usernameInput.value;

         if (usernameBox.innerHTML === "") {
            usernameBox.innerHTML = "User 1";
         }
       }
   });
});


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

sendMessage1.addEventListener("click" , function(){
   sendingTextBox.remove();
});

$(messageInput1).keyup(function(event) {
         
         if (messageInput1.value !== "") {
            
         } else {
            setTimeout(() => {
               typeingCounter = 0;
               sendingTextBox.remove();
            }, 800);
         } 
   
});


sendMessage1.addEventListener('click' , function(){

   if (messageInput1 === "") {
      console.log("error");
   } else {

      let meassageDiv11 = document.createElement("div");
      meassageDiv11.className = "meassageDiv11";
      messages.append(meassageDiv11);

      let meassageDiv1 = document.createElement("div");
      meassageDiv1.className = "meassageDiv1";
      meassageDiv11.append(meassageDiv1);

      let meassage1 = document.createElement("p");
      meassage1.className = "message1";
      meassage1.innerHTML = messageInput1.value;
      meassageDiv1.append(meassage1);

      let message1Width = meassage1.clientWidth;

      const utcDate = new Date();
      const offsetMinutes = utcDate.getTimezoneOffset();
      const gmtPlusOneOffset = 1 * 60 * 60 * 1000;
      const gmtPlusOneDate = new Date(utcDate.getTime() + gmtPlusOneOffset);
      
      const hours = gmtPlusOneDate.getHours() - 1;
      const minutes = gmtPlusOneDate.getMinutes();
      const seconds = gmtPlusOneDate.getSeconds();

      const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;
      
      function padZero(value) {
         return value < 10 ? '0' + value : value;
       }
       
      let dateBox = document.createElement("div");
      dateBox.className = "dateBox";
      dateBox.style.width = message1Width + "px";
      meassageDiv11.append(dateBox);
      console.log(message1Width);

      let messageTime = document.createElement("div");
      messageTime.innerHTML = formattedTime;
      dateBox.prepend(messageTime);

      let checkmark = document.createElement("div");
      checkmark.className = "checkmark material-icons";
      checkmark.style.fontSize = "20px";
      checkmark.innerHTML = "check";
      dateBox.append(checkmark);
   
      messageInput1.value = "";
      typeingCounter = 0;
   }
});

let typeingCounter2 = 0;

$(messageInput2).keydown(function(event) {
   typeingCounter2++

   if (typeingCounter2 === 1) {

      sendingTextBox.className = "sendMessage";
         msgInput.append(sendingTextBox);
   }
});

sendMessage2.addEventListener("click" , function(){
   sendingTextBox.remove();
});

$(messageInput2).keyup(function(event) {
         
         if (messageInput2.value !== "") {
            
         } else {
            setTimeout(() => {
               typeingCounter2 = 0;
               sendingTextBox.remove();
            }, 800);
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
      checkmark.style.fontSize = "20px";
      checkmark.innerHTML = "check";
      markDiv.prepend(checkmark);

      if (message2Height > 47) {
         markDiv.style.alignItems = "flex-end";
         checkmark.style.paddingBottom = "5px";
      } else {
         markDiv.style.alignItems = "center";
         checkmark.style.paddingBottom = "0px";
      }

      messageInput2.value = "";
      typeingCounter2 = 0;
   }
});
