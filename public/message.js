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

let sendingDiv1 = document.createElement("div");
let sendingTextBox = document.createElement("div");

$(messageInput1).keydown(function(event) {
   typeingCounter++

   if (typeingCounter === 1 || messageInput1.value !== "") {

      sendingDiv1.className = "sendingDiv1";
      messages.append(sendingDiv1)

      sendingTextBox.className = "sendMessage";
      sendingDiv1.append(sendingTextBox);

      sendingTextBox.scrollIntoView({ behavior: "smooth", block: "end" });
   }
});

sendMessage1.addEventListener("click" , function(){
   if (messageInput1.value !== "") {
      sendingDiv1.remove();
   } 
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

let messageCounter = 0;

sendMessage1.addEventListener('click' , function(){

   if (messageInput1.value === "") {
      console.log("error");
   } else {
      setTimeout(() => {

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
      let message1Hidth = meassage1.clientHeight;

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

      let dateBoxWidth = dateBox.clientWidth;

      dateBox.className = "dateBox";
      dateBox.style.width = message1Width + "px";
      if (message1Hidth > 37) {
         dateBox.style.width = message1Width - 1 + "px";
      }
      meassageDiv11.append(dateBox);

      let messageTime = document.createElement("div");
      messageTime.innerHTML = formattedTime;
      dateBox.prepend(messageTime);
      
      console.log(message1Width);
      console.log(dateBoxWidth);

      let checkmark = document.createElement("div");
      checkmark.className = "checkmark material-icons";
      checkmark.style.fontSize = "20px";
      checkmark.innerHTML = "check";
      dateBox.append(checkmark);
   
      messageInput1.value = "";
      typeingCounter = 0;

      dateBox.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 200);
   }
});

let goBackButton2 = document.createElement("div");

usernameClick2.addEventListener("click" , function () {

   goBackButton2.innerHTML = "go back";
   goBackButton2.className = "cursor-pointer";
   right.prepend(goBackButton2);
 
   usernameClick2.style.visibility = "hidden";
   usernameInput2.style.visibility = "visible";
});

goBackButton2.addEventListener("click" , function (){
   goBackButton2.remove();
   usernameInput2.style.visibility = "hidden";
   usernameClick2.style.visibility = "visible";
})


$(document).ready(function(){
   $('input').keypress(function(event){
       if(event.which === 13){
         usernameBox2.innerHTML = usernameInput2.value;

         if (usernameBox2.innerHTML === "") {
            usernameBox2.innerHTML = "User 2";
         }
       }
   });
});

let typeingCounter2 = 0;

let sendingDiv2 = document.createElement("div");

$(messageInput2).keydown(function(event) {
   typeingCounter2++

   if (typeingCounter2 === 1 || messageInput2.value !== "") {

      sendingDiv2.className = "sendingDiv2";
      messages.append(sendingDiv2)

      sendingTextBox.className = "sendMessage";
      sendingDiv2.append(sendingTextBox);

      sendingTextBox.scrollIntoView({ behavior: "smooth", block: "end" });
      
   }
});

sendMessage2.addEventListener("click" , function(){
   if (messageInput2.value !== "") {
      sendingDiv2.remove();
   }
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

   if (messageInput2.value === "") {
      console.log("error");
   } else {
      setTimeout(() => {

         let meassageDiv22 = document.createElement("div");
         meassageDiv22.className = "meassageDiv22";
         messages.append(meassageDiv22);
   
         let meassageDiv2 = document.createElement("div");
         meassageDiv2.className = "meassageDiv2";
         meassageDiv22.append(meassageDiv2);
   
         let meassage2 = document.createElement("p");
         meassage2.className = "message2";
         meassage2.innerHTML = messageInput2.value;
         meassageDiv2.append(meassage2);
   
         let message2Width = meassage2.clientWidth;
         let message2Hidth = meassage2.clientHeight;
   
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
   
         let dateBoxWidth = dateBox.clientWidth;
   
         dateBox.className = "dateBox";
         dateBox.style.width = message2Width + "px";
         if (message2Hidth > 37) {
            dateBox.style.width = message2Width - 1 + "px";
         }
         meassageDiv22.append(dateBox);
   
         let messageTime = document.createElement("div");
         messageTime.innerHTML = formattedTime;
         dateBox.prepend(messageTime);
         
         let checkmark = document.createElement("div");
         checkmark.className = "checkmark material-icons";
         checkmark.style.fontSize = "20px";
         checkmark.innerHTML = "check";
         dateBox.append(checkmark);
      
         messageInput2.value = "";
         typeingCounter2 = 0;

         dateBox.scrollIntoView({ behavior: "smooth", block: "end" });
      
         }, 200);
   }
});   