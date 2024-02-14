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
let usernameBox2 = document.getElementById("usernameBox2");
let left = document.getElementById("left");


let msgRegex = /^msg.*/;

for (let p=0 ; p < localStorage.length ; p++) {

   let key = localStorage.key(p);
   
   if (msgRegex.test(key)) {
      let dataStorage = localStorage.getItem(key);
        
      if (dataStorage !== null) {
         let parsedData = JSON.parse(dataStorage);
        
         if (parsedData.msgSide === "prim") {
     
           let meassageDiv11 = document.createElement("div");
           meassageDiv11.className = "meassageDiv11";
           messages.append(meassageDiv11);
     
           let meassageDiv1 = document.createElement("div");
           meassageDiv1.className = "meassageDiv1";
           meassageDiv11.append(meassageDiv1);
     
           let meassage1 = document.createElement("p");
           meassage1.className = "message1";
           meassage1.innerHTML = parsedData.value;
           meassageDiv1.append(meassage1);
     
           let message1Width = meassage1.getBoundingClientRect().width;
     
           let dateBox = document.createElement("div");
     
           dateBox.className = "dateBox";
           dateBox.style.width = message1Width + "px";
           meassageDiv11.append(dateBox);
     
           let messageTime = document.createElement("div");
           messageTime.innerHTML = parsedData.sentTime;
           dateBox.prepend(messageTime);
           
     
           let checkmark = document.createElement("div");
           checkmark.className = "checkmark material-icons";
           checkmark.style.fontSize = "20px";
           checkmark.style.color = "black";
           checkmark.innerHTML = "check";
           dateBox.append(checkmark);
     
           let dateBox2 = document.createElement("div");
           dateBox2.className = "dateBox2";
           dateBox2.innerHTML = parsedData.sentDate;
           meassageDiv1.append(dateBox2);
     
           meassageDiv11.addEventListener('mouseover' , function(){
              checkmark.style.color = "black";
              dateBox.style.backgroundColor = "#3E8944";
              meassage1.style.backgroundColor = "#3E8944";
           });
            
           meassageDiv11.addEventListener('mouseleave' , function(){
              dateBox.style.backgroundColor = "#36EC8B";
              meassage1.style.backgroundColor = "#36EC8B";
           });
         } else if (parsedData.msgSide === "seco") {
           let meassageDiv22 = document.createElement("div");
           meassageDiv22.className = "meassageDiv22";
           messages.append(meassageDiv22);
     
           let meassageDiv2 = document.createElement("div");
           meassageDiv2.className = "meassageDiv2";
           meassageDiv22.append(meassageDiv2);
     
           let meassage2 = document.createElement("p");
           meassage2.className = "message2";
           meassage2.innerHTML = parsedData.value;
           meassageDiv2.append(meassage2);
     
           let message2Width = meassage2.getBoundingClientRect().width;
     
           let dateBox = document.createElement("div");
     
           dateBox.className = "dateBox";
           dateBox.style.width = message2Width + "px";
           meassageDiv22.append(dateBox);
     
           let messageTime = document.createElement("div");
           messageTime.innerHTML = parsedData.sentTime;
           dateBox.prepend(messageTime);
           
     
           let checkmark = document.createElement("div");
           checkmark.className = "checkmark material-icons";
           checkmark.style.fontSize = "20px";
           checkmark.style.color = "black";
           checkmark.innerHTML = "check";
           dateBox.append(checkmark);
     
           let dateBox2 = document.createElement("div");
           dateBox2.className = "dateBox2";
           dateBox2.innerHTML = parsedData.sentDate;
           meassageDiv2.append(dateBox2);
     
           meassageDiv22.addEventListener('mouseover' , function(){
              checkmark.style.color = "black";
              dateBox.style.backgroundColor = "#3E8944";
              meassage2.style.backgroundColor = "#3E8944";
           });
            
           meassageDiv22.addEventListener('mouseleave' , function(){
              dateBox.style.backgroundColor = "#36EC8B";
              meassage2.style.backgroundColor = "#36EC8B";
           });
         }
     } else {
        console.log('Data not found in local storage');
     }
  }
}



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
let sendingTextBox2 = document.createElement("div");
let sendDots = document.createElement("div");
let dotsBox = document.createElement("div");

$(messageInput1).keydown(function(event) {
   typeingCounter++

   if (typeingCounter === 1 || messageInput1.value !== "") {

      sendingDiv1.className = "sendingDiv1";
      messages.append(sendingDiv1);

      sendingTextBox.className = "sendMessage";
      sendingTextBox.innerHTML = usernameBox.innerHTML + " " + "is typeing";
      sendingDiv1.append(sendingTextBox);

      sendingTextBox.scrollIntoView({ behavior: "smooth", block: "end" });
      
      sendDots.innerHTML = "...";
      sendDots.className = "sendDots";  
      sendingTextBox.append(dotsBox);
      
      setTimeout(() => {
         dotsBox.append(sendDots);
      }, 200);
      
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

      let message1Width = meassage1.getBoundingClientRect().width;

      const utcDate = new Date();
      const offsetMinutes = utcDate.getTimezoneOffset();
      const gmtPlusOneOffset = 1 * 60 * 60 * 1000;
      const gmtPlusOneDate = new Date(utcDate.getTime() + gmtPlusOneOffset);
      let dayOfMonth = utcDate.getDate();
      let month = utcDate.getMonth() + 1;
      let monthDisplay;

      switch (month) {
         case 1:
            monthDisplay = "Jan";
         break;
         case 2:
            monthDisplay = "Feb";
         break;
         case 3:
            monthDisplay = "Mar";
         break;
         case 4:
            monthDisplay = "Apr";
         break;
         case 5:
            monthDisplay = "May";
         break;
         case 6:
            monthDisplay = "Jun";
         break;
         case 7:
            monthDisplay = "Jul";
         break;
         case 8:
            monthDisplay = "Aug";
         break;
         case 9:
            monthDisplay = "Sep";
         break;
         case 10:
            monthDisplay = "Oct";
         break;
         case 11:
            monthDisplay = "Nov";
         break;
         case 12:
            monthDisplay = "Dec";
         break;
      }
      
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

      let messageTime = document.createElement("div");
      messageTime.innerHTML = formattedTime;
      dateBox.prepend(messageTime);
      
      let checkmark = document.createElement("div");
      checkmark.className = "checkmark material-icons";
      checkmark.style.fontSize = "20px";
      checkmark.style.color = "white";
      checkmark.innerHTML = "check";
      dateBox.append(checkmark);
   
      messageInput1.value = "";
      typeingCounter = 0;

      dateBox.scrollIntoView({ behavior: "smooth", block: "end" });

      let dateBox2 = document.createElement("div");
      dateBox2.className = "dateBox2";
      dateBox2.innerHTML = dayOfMonth + "." + monthDisplay;
      meassageDiv1.append(dateBox2);

      let msgDateId = Date.now();

      meassageDiv11.addEventListener('mouseover' , function(){
         checkmark.style.color = "black";
         dateBox.style.backgroundColor = "#3E8944";
         meassage1.style.backgroundColor = "#3E8944";
      });
       
      meassageDiv11.addEventListener('mouseleave' , function(){
         dateBox.style.backgroundColor = "#36EC8B";
         meassage1.style.backgroundColor = "#36EC8B";
      });

      let msgId = msgDateId + usernameBox2.innerHTML;

      let msgData = { msgSide: "prim" , id: msgId , user : usernameBox.innerHTML , value: meassage1.innerHTML , sentTime: formattedTime , sentDate: dayOfMonth + "." + monthDisplay};
      let msgDataString = JSON.stringify(msgData);

      localStorage.setItem('msgData'+ msgId , msgDataString);
      
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

      sendingTextBox2.className = "sendMessage";
      sendingTextBox2.innerHTML = usernameBox2.innerHTML + " " + "is typeing";
      sendingDiv2.append(sendingTextBox2);

      sendingTextBox2.scrollIntoView({ behavior: "smooth", block: "end" });
      
      sendingTextBox2.append(dotsBox);

      sendDots.innerHTML = "...";
      sendDots.className = "sendDots";
      dotsBox.append(sendDots);
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
               sendingTextBox2.remove();
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

         let message2Width = meassage2.getBoundingClientRect().width;
   
         const utcDate = new Date();
         const offsetMinutes = utcDate.getTimezoneOffset();
         const gmtPlusOneOffset = 1 * 60 * 60 * 1000;
         const gmtPlusOneDate = new Date(utcDate.getTime() + gmtPlusOneOffset);
         
         const hours = gmtPlusOneDate.getHours() - 1;
         const minutes = gmtPlusOneDate.getMinutes();
         const seconds = gmtPlusOneDate.getSeconds();
         let dayOfMonth = utcDate.getDate();
         let month = utcDate.getMonth() + 1;
         let monthDisplay;

      switch (month) {
         case 1:
            monthDisplay = "Jan";
         break;
         case 2:
            monthDisplay = "Feb";
         break;
         case 3:
            monthDisplay = "Mar";
         break;
         case 4:
            monthDisplay = "Apr";
         break;
         case 5:
            monthDisplay = "May";
         break;
         case 6:
            monthDisplay = "Jun";
         break;
         case 7:
            monthDisplay = "Jul";
         break;
         case 8:
            monthDisplay = "Aug";
         break;
         case 9:
            monthDisplay = "Sep";
         break;
         case 10:
            monthDisplay = "Oct";
         break;
         case 11:
            monthDisplay = "Nov";
         break;
         case 12:
            monthDisplay = "Dec";
         break;
      }
   
         const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;
         
         function padZero(value) {
            return value < 10 ? '0' + value : value;
          }
          
         let dateBox = document.createElement("div");
   
         dateBox.className = "dateBox";
         dateBox.style.width = message2Width + "px";
         meassageDiv22.append(dateBox);
   
         let messageTime = document.createElement("div");
         messageTime.innerHTML = formattedTime;
         dateBox.prepend(messageTime);
         
         let checkmark = document.createElement("div");
         checkmark.className = "checkmark material-icons";
         checkmark.style.fontSize = "20px";
         checkmark.style.color = "white";
         checkmark.innerHTML = "check";
         dateBox.append(checkmark);
      
         messageInput2.value = "";
         typeingCounter2 = 0;

         dateBox.scrollIntoView({ behavior: "smooth", block: "end" });

         let dateBox2 = document.createElement("div");
         dateBox2.className = "dateBox2";
         dateBox2.innerHTML = dayOfMonth + "." + monthDisplay;
         meassageDiv2.append(dateBox2);

         let msgDateId = Date.now();

         meassageDiv22.addEventListener('mouseover' , function(){
            checkmark.style.color = "black";
            dateBox.style.backgroundColor = "#3E8944";
            meassage2.style.backgroundColor = "#3E8944";
         });
          
         meassageDiv22.addEventListener('mouseleave' , function(){
            dateBox.style.backgroundColor = "#36EC8B";
            meassage2.style.backgroundColor = "#36EC8B";
         });

         let msgId = msgDateId + usernameBox2.innerHTML;

         let msgData = { msgSide: "seco" , id: msgId , user : usernameBox2.innerHTML , value: meassage2.innerHTML , sentTime: formattedTime , sentDate: dayOfMonth + "." + monthDisplay};
         let msgDataString = JSON.stringify(msgData);

         localStorage.setItem('msgData'+ msgId, msgDataString);
         }, 200);
   }
});   