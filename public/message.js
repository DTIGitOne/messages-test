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
let filter = document.getElementById("filter");
let inputMessage = document.getElementById("inputMessage");
let sendButton = document.getElementById("sendButton");
let leftUser = document.getElementById("leftUser");
let rightUser = document.getElementById("rightUser");
let toTop = document.getElementById("toTop");
let msgHistory = document.createElement("div");

function showErrorFlash(element) {
   element.classList.add('error');

   setTimeout(function() {
      element.classList.remove('error');
  }, 1000);
}

let toBottom = document.createElement("div");
toBottom.className = "toBottom";
toBottom.innerHTML = "Latest text";

toTop.addEventListener('click' , function(){
   let firstMessage = messages.firstElementChild;
   firstMessage.scrollIntoView({ behavior: 'smooth' });
   toBottom.remove();
});


function isAtBottom() {
   return messages.scrollTop + messages.clientHeight >= messages.scrollHeight;
}

messages.addEventListener('scroll', function() {
   if (isAtBottom()) {
       toBottom.remove();
   } else {
         messages.append(toBottom);
   }
});

function scrollToBottomOnClick(element) {
   element.addEventListener('click', function() {
       const scrollHeight = messages.scrollHeight;
       messages.scrollTo({
           top: scrollHeight,
           behavior: 'smooth'
       });
   });
}

scrollToBottomOnClick(toBottom);

function saveScrollPosition() {
   localStorage.setItem('scrollPosition', messages.scrollTop);
}

function restoreScrollPosition() {
   let scrollPosition = localStorage.getItem('scrollPosition');
   if (scrollPosition) {
       messages.scrollTop = scrollPosition;
   }
}

messages.addEventListener('scroll', function() {
   saveScrollPosition();
});

document.addEventListener("DOMContentLoaded", function() {
   restoreScrollPosition();
});

let messageHeight = messages.getBoundingClientRect().height;

filter.addEventListener('click' , function(){

   let filerOptionsBox = document.createElement("div");
   filerOptionsBox.className = "filerOptionsBox";
   filter.append(filerOptionsBox);

   let filterButton = document.createElement("div");
   filterButton.innerHTML = "Filter By";
   filterButton.className = "moreOpt";
   filterButton.style.borderTopLeftRadius = "10px";
   filerOptionsBox.append(filterButton);

   msgHistory.className = "moreOpt";
   msgHistory.innerHTML = "History";
   msgHistory.style.borderBottomLeftRadius = "10px";
   msgHistory.style.borderBottomRightRadius = "10px";
   filerOptionsBox.append(msgHistory);

   setTimeout(() => {
      filter.addEventListener('mouseleave' , function(){
         filerOptionsBox.remove();
      });
   }, 190);

});

let regexPattern = /^msg.*/;

let keys = Object.keys(localStorage).filter(function(key) {
    return regexPattern.test(key);
}).sort(); 

keys.forEach(function(key) {
    let dataStorage = localStorage.getItem(key);
    
    if (dataStorage !== null) {
        let parsedData = JSON.parse(dataStorage);
        
        if (parsedData.msgSide === "prim") {
         if (parsedData.existing === "true") {
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
            let message1Height = meassage1.getBoundingClientRect().height;

            let dateBox = document.createElement("div");
      
            dateBox.className = "dateBox";
            dateBox.style.width = message1Width + "px";
            meassageDiv11.append(dateBox);
      
            let messageTime = document.createElement("div");
            messageTime.innerHTML = parsedData.sentTime;
            dateBox.prepend(messageTime);
            console.log(parsedData);
      
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

            let messageOptions = document.createElement("div");
            messageOptions.className = "messageOptions";
            messageOptions.style.borderTopRightRadius = "10px";
            messageOptions.style.borderBottomLeftRadius = "10px";
            messageOptions.style.borderBottomRightRadius = "10px";
            dateBox.append(messageOptions);
      
            let editBox = document.createElement("div");
            editBox.className = "msgOpt";
            editBox.style.borderTopRightRadius = "10px";
            messageOptions.append(editBox);
      
            let editLogo = document.createElement("div");
            editLogo.className = "material-icons";
            editLogo.innerHTML = "edit";
            editBox.append(editLogo);
      
            let edit = document.createElement("div");
            edit.innerHTML = "edit";
            editBox.append(edit);
      
            let deleteBox = document.createElement("div");
            deleteBox.className = "msgOpt";
            messageOptions.append(deleteBox);
      
            let deleteLogo = document.createElement("div");
            deleteLogo.className = "material-icons";
            deleteLogo.innerHTML = "delete";
            deleteBox.append(deleteLogo);
      
            let delete1 = document.createElement("div");
            delete1.innerHTML = "delete";
            deleteBox.append(delete1);
      
            let respondBox = document.createElement("div");
            respondBox.style.borderBottomRightRadius = "10px";
            respondBox.style.borderBottomLeftRadius = "10px";
            respondBox.className = "msgOpt";
            messageOptions.append(respondBox);
      
            let respondLogo = document.createElement("div");
            respondLogo.className = "material-icons";
            respondLogo.innerHTML = "subdirectory_arrow_right";
            respondBox.append(respondLogo);
      
            let respond1 = document.createElement("div");
            respond1.innerHTML = "respond";
            respondBox.append(respond1);
               
               meassageDiv11.addEventListener('click' , function(){
                  if (meassage1.contentEditable === "true") {
                     console.log("no");
                  } else {
                     messageOptions.style.display = "flex";
                     checkmark.style.display = "none";
                     respondBox.scrollIntoView({ behavior: "smooth", block: "end" });
                  }
               });
            
            meassageDiv11.addEventListener("mouseleave" , function(){
               messageOptions.style.display = "none";
               checkmark.style.display = "inline";
            });

            $(document).ready(function(){
               $(editBox).on('dblclick', function(){
                  messageOptions.style.display = "none";
                  dateBox2.style.display = "none";
                  
                  let okButton = document.createElement("div");
                  okButton.className = "material-icons hover:text-green-500 cursor-pointer";
                  okButton.innerHTML = "check";
                  meassageDiv1.append(okButton);

                  let noButton = document.createElement("div");
                  noButton.className = "material-icons hover:text-red-500 cursor-pointer";
                  noButton.innerHTML = "close";
                  meassageDiv1.append(noButton);

                  meassage1.contentEditable = "true";
                  
                  meassage1.focus();
                  dateBox.style.visibility = "hidden";

                  let msgIdToUpdate = parsedData.id;                     
                  let storedData = localStorage.getItem('msgData' + msgIdToUpdate);

                  let msgData = JSON.parse(storedData);

                  $(okButton).click(function(){
                     if (meassage1.innerHTML !== "") {
                     okButton.remove();
                     noButton.remove();
                     meassage1.contentEditable = "false";
                     dateBox2.style.display = "flex";
                     dateBox.style.visibility = "visible";
                     let message1Width2 = meassage1.getBoundingClientRect().width;
                     dateBox.style.width = message1Width2 + "px";


                     if (storedData) {
                        msgData.value = meassage1.innerHTML;
                  
                        let updatedMsgDataString = JSON.stringify(msgData);
                    
                        localStorage.setItem('msgData' + msgIdToUpdate, updatedMsgDataString);

                        meassage1.innerHTML = msgData.value;

                        location.reload();
                    }
                     } else {
                        showErrorFlash(meassage1);
                        meassage1.innerHTML = msgData.value;
                     }

                   });

                   $(noButton).click(function(){
                     okButton.remove();
                     noButton.remove();
                     meassage1.contentEditable = "false";
                     dateBox2.style.display = "flex";
                     dateBox.style.visibility = "visible";
                     meassage1.innerHTML = msgData.value;
                   });
            
                   $(meassage1).on('blur', function() {
                     setTimeout(() => {
                        okButton.remove();
                        noButton.remove();
                        meassage1.contentEditable = "false";
                        dateBox2.style.display = "flex";
                        dateBox.style.visibility = "visible";
                        meassage1.innerHTML = msgData.value;
                        showErrorFlash(meassage1);
                        if (meassage1.innerHTML === "") {
                           meassage1.innerHTML = msgData.value;
                           showErrorFlash(meassage1);
                        } 
                     }, 300);
                     
                 });

               });
           });

           $(document).ready(function(){
            $(deleteBox).on('dblclick', function(){
               
               showErrorFlash(meassage1);
               showErrorFlash(dateBox);

               let msgIdToUpdate = parsedData.id;                     
               let storedData = localStorage.getItem('msgData' + msgIdToUpdate);
               let msgData = JSON.parse(storedData);
             
               if (storedData) {
                  msgData.existing = "false";
            
                  let updatedMsgDataString = JSON.stringify(msgData);
              
                  localStorage.setItem('msgData' + msgIdToUpdate, updatedMsgDataString);
              }

               setTimeout(() => {
                  meassageDiv11.remove();
                  location.reload();
               }, 100);
            });
           });

           

         } else if (parsedData.existing === "false") {
            //deleted messages
         }
          } else if (parsedData.msgSide === "seco") {
            if (parsedData.existing === "true") {
               
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
            let message2Height = meassage2.getBoundingClientRect().height;

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

            let messageOptions = document.createElement("div");
            messageOptions.className = "messageOptions";
            messageOptions.style.borderTopLeftRadius = "10px";
            messageOptions.style.borderBottomLeftRadius = "10px";
            messageOptions.style.borderBottomRightRadius = "10px";
            dateBox.append(messageOptions);
      
            let editBox = document.createElement("div");
            editBox.style.borderTopLeftRadius = "10px";
            editBox.className = "msgOpt";
            messageOptions.append(editBox);
      
            let editLogo = document.createElement("div");
            editLogo.className = "material-icons";
            editLogo.innerHTML = "edit";
            editBox.append(editLogo);
      
            let edit = document.createElement("div");
            edit.innerHTML = "edit";
            editBox.append(edit);
      
            let deleteBox = document.createElement("div");
            deleteBox.className = "msgOpt";
            messageOptions.append(deleteBox);
      
            let deleteLogo = document.createElement("div");
            deleteLogo.className = "material-icons";
            deleteLogo.innerHTML = "delete";
            deleteBox.append(deleteLogo);
      
            let delete1 = document.createElement("div");
            delete1.innerHTML = "delete";
            deleteBox.append(delete1);
      
            let respondBox = document.createElement("div");
            respondBox.style.borderBottomRightRadius = "10px";
            respondBox.style.borderBottomLeftRadius = "10px";
            respondBox.className = "msgOpt";
            messageOptions.append(respondBox);
      
            let respondLogo = document.createElement("div");
            respondLogo.className = "material-icons";
            respondLogo.innerHTML = "subdirectory_arrow_right";
            respondBox.append(respondLogo);
      
            let respond1 = document.createElement("div");
            respond1.innerHTML = "respond";
            respondBox.append(respond1);
      
            meassageDiv22.addEventListener('click' , function(){
               messageOptions.style.display = "flex";
               checkmark.style.display = "none";
               respondBox.scrollIntoView({ behavior: "smooth", block: "end" });
            });
            
            meassageDiv22.addEventListener("mouseleave" , function(){
               messageOptions.style.display = "none";
               checkmark.style.display = "inline";
            });

            $(document).ready(function(){
               $(editBox).on('dblclick', function(){
                  messageOptions.style.display = "none";
                  dateBox2.style.display = "none";

                  let noButton = document.createElement("div");
                  noButton.className = "material-icons hover:text-red-500 cursor-pointer";
                  noButton.innerHTML = "close";
                  meassageDiv2.append(noButton);
                  
                  let okButton = document.createElement("div");
                  okButton.className = "material-icons hover:text-green-500 cursor-pointer";
                  okButton.innerHTML = "check";
                  meassageDiv2.append(okButton);

                  meassage2.contentEditable = "true";
                  
                  meassage2.focus();
                  dateBox.style.visibility = "hidden";

                  let msgIdToUpdate = parsedData.id;                     
                  let storedData = localStorage.getItem('msgData' + msgIdToUpdate);

                  let msgData = JSON.parse(storedData);

                  $(okButton).click(function(){
                     if (meassage2.innerHTML !== "") {
                     okButton.remove();
                     noButton.remove();
                     meassage2.contentEditable = "false";
                     dateBox2.style.display = "flex";
                     dateBox.style.visibility = "visible";
                     let message2Width2 = meassage2.getBoundingClientRect().width;
                     dateBox.style.width = message2Width2 + "px";


                     if (storedData) {
                        msgData.value = meassage2.innerHTML;
                  
                        let updatedMsgDataString = JSON.stringify(msgData);
                    
                        localStorage.setItem('msgData' + msgIdToUpdate, updatedMsgDataString);

                        meassage2.innerHTML = msgData.value;

                        location.reload();
                    }
                     } else {
                        showErrorFlash(meassage2);
                        meassage2.innerHTML = msgData.value;
                     }

                   });

                   $(noButton).click(function(){
                     okButton.remove();
                     noButton.remove();
                     meassage2.contentEditable = "false";
                     dateBox2.style.display = "flex";
                     dateBox.style.visibility = "visible";
                     meassage2.innerHTML = msgData.value;
                   });
            
                   $(meassage2).on('blur', function() {
                     setTimeout(() => {
                        okButton.remove();
                        noButton.remove();
                        meassage2.contentEditable = "false";
                        dateBox2.style.display = "flex";
                        dateBox.style.visibility = "visible";
                        meassage2.innerHTML = msgData.value;
                        showErrorFlash(meassage2);
                        if (meassage2.innerHTML === "") {
                           showErrorFlash(meassage2);
                           meassage2.innerHTML = msgData.value;
                        }
                     }, 300);
                     
                 });

               });
           });

           $(document).ready(function(){
            $(deleteBox).on('dblclick', function(){
               showErrorFlash(meassage2);
               showErrorFlash(dateBox);

               let msgIdToUpdate = parsedData.id;                     
               let storedData = localStorage.getItem('msgData' + msgIdToUpdate);
               let msgData = JSON.parse(storedData);
             
               if (storedData) {
                  msgData.existing = "false";
            
                  let updatedMsgDataString = JSON.stringify(msgData);
              
                  localStorage.setItem('msgData' + msgIdToUpdate, updatedMsgDataString);
              }

               setTimeout(() => {
                  meassageDiv22.remove();
                  location.reload();
               }, 100);
            });
           });

         }
   
          } 
    } else {
        console.log('Data not found in local storage');
    }
});

let hisCounter = 0

let keysWithFalseValue = [];

msgHistory.addEventListener("click", function() {
   hisCounter++
   
   msgHistory.remove();

   
 
   if (hisCounter === 1) {}
    keys.forEach(function(key) {
        let dataStorage = localStorage.getItem(key);
        if (dataStorage !== null) {
            let parsedData = JSON.parse(dataStorage);
            if (parsedData.existing === "false") {
                keysWithFalseValue.push(key);
            }
        }
    });

    keysWithFalseValue.forEach(function(key) {
      let dataStorage = localStorage.getItem(key);
      let data = JSON.parse(dataStorage);
      
      if (data.msgSide === "prim") {
            let meassageDiv11 = document.createElement("div");
            meassageDiv11.className = "meassageDiv11";
            messages.append(meassageDiv11);
      
            let meassageDiv1 = document.createElement("div");
            meassageDiv1.className = "meassageDiv1";
            meassageDiv11.append(meassageDiv1);
      
            let meassage1Del = document.createElement("p");
            meassage1Del.className = "message1";
            meassage1Del.innerHTML = data.value;
            meassage1Del.style.backgroundColor = "#E83D3D";
            meassageDiv1.append(meassage1Del);
      
            let message1WidthDel = meassage1Del.getBoundingClientRect().width;

            let dateBox = document.createElement("div");
      
            dateBox.className = "dateBox";
            dateBox.style.width = message1WidthDel + "px";
            dateBox.style.backgroundColor = "#E83D3D";
            meassageDiv11.append(dateBox);
      
            let messageTime = document.createElement("div");
            messageTime.innerHTML = data.sentTime;
            dateBox.prepend(messageTime);
      
            let dateBox2 = document.createElement("div");
            dateBox2.className = "dateBox2";
            dateBox2.innerHTML = data.sentDate;
            meassageDiv1.append(dateBox2);

            let trashButton = document.createElement("div");
            trashButton.innerHTML = "delete_forever";
            trashButton.className = "material-icons delButton";
            meassageDiv1.append(trashButton);

            trashButton.addEventListener('click' , function(){
               meassageDiv11.remove();
               localStorage.removeItem(key);
            });

            let restoreButton = document.createElement("div");
            restoreButton.innerHTML = "restore";
            restoreButton.className = "material-icons delButton";
            restoreButton.style.color = "#36EC8B";
            meassageDiv1.append(restoreButton);

            restoreButton.addEventListener('click' , function(){
               data.existing = "true";
               localStorage.setItem(key, JSON.stringify(data));
               setTimeout(() => {
                  location.reload();
               }, 100);
            });

      } else if (data.msgSide === "seco") {
            let meassageDiv22 = document.createElement("div");
            meassageDiv22.className = "meassageDiv22";
            messages.append(meassageDiv22);
      
            let meassageDiv2 = document.createElement("div");
            meassageDiv2.className = "meassageDiv2";
            meassageDiv22.append(meassageDiv2);
      
            let meassage2Del = document.createElement("p");
            meassage2Del.className = "message2";
            meassage2Del.innerHTML = data.value;
            meassage2Del.style.backgroundColor = "#E83D3D";
            meassageDiv2.append(meassage2Del);
      
            let message2WidthDel = meassage2Del.getBoundingClientRect().width;

            let dateBox = document.createElement("div");
      
            dateBox.className = "dateBox";
            dateBox.style.width = message2WidthDel + "px";
            dateBox.style.backgroundColor = "#E83D3D";
            meassageDiv22.append(dateBox);
      
            let messageTime = document.createElement("div");
            messageTime.innerHTML = data.sentTime;
            dateBox.prepend(messageTime);
      
            let dateBox2 = document.createElement("div");
            dateBox2.className = "dateBox2";
            dateBox2.innerHTML = data.sentDate;
            meassageDiv2.append(dateBox2);

            let trashButton = document.createElement("div");
            trashButton.innerHTML = "delete_forever";
            trashButton.className = "material-icons delButton";
            meassageDiv2.append(trashButton);

            trashButton.addEventListener('click' , function(){
               meassageDiv22.remove();
               localStorage.removeItem(key);
            });

            let restoreButton = document.createElement("div");
            restoreButton.innerHTML = "restore";
            restoreButton.className = "material-icons delButton";
            restoreButton.style.color = "#36EC8B";
            meassageDiv2.append(restoreButton);

            restoreButton.addEventListener('click' , function(){
               data.existing = "true";
               localStorage.setItem(key, JSON.stringify(data));
               setTimeout(() => {
                  location.reload();
               }, 100);
            });
      }


    });

});



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

function msg1() {

   if (messageInput1.value === "" && inputMessage.value === "") {
      console.log("error");
   } else {
      setTimeout(() => {

         let inputValue;

         if (messageInput1.value === "") {
            inputValue = inputMessage.value;
         } else if (inputMessage.value === "") {
            inputValue = messageInput1.value;
         }

      let meassageDiv11 = document.createElement("div");
      meassageDiv11.className = "meassageDiv11";
      messages.append(meassageDiv11);

      let meassageDiv1 = document.createElement("div");
      meassageDiv1.className = "meassageDiv1";
      meassageDiv11.append(meassageDiv1);

      let meassage1 = document.createElement("p");
      meassage1.className = "message1";
      meassage1.innerHTML = inputValue;
      meassageDiv1.append(meassage1);

      let message1Width = meassage1.getBoundingClientRect().width;
      let message1Height = meassage1.getBoundingClientRect().height;

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
      
      let hours = gmtPlusOneDate.getUTCHours();
      let minutes = gmtPlusOneDate.getUTCMinutes();

      const seconds = gmtPlusOneDate.getSeconds();


      const formattedTime = `${hours}:${minutes}`;
      
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
      inputMessage.value = "";
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

      let messageOptions = document.createElement("div");
      messageOptions.className = "messageOptions";
      messageOptions.style.borderTopRightRadius = "10px";
      messageOptions.style.borderBottomLeftRadius = "10px";
      messageOptions.style.borderBottomRightRadius = "10px";
      dateBox.append(messageOptions);

      let editBox = document.createElement("div");
      editBox.style.borderTopRightRadius = "10px";
      editBox.className = "msgOpt";
      messageOptions.append(editBox);

      let editLogo = document.createElement("div");
      editLogo.className = "material-icons";
      editLogo.innerHTML = "edit";
      editBox.append(editLogo);

      let edit = document.createElement("div");
      edit.innerHTML = "edit";
      editBox.append(edit);

      let deleteBox = document.createElement("div");
      deleteBox.className = "msgOpt";
      messageOptions.append(deleteBox);

      let deleteLogo = document.createElement("div");
      deleteLogo.className = "material-icons";
      deleteLogo.innerHTML = "delete";
      deleteBox.append(deleteLogo);

      let delete1 = document.createElement("div");
      delete1.innerHTML = "delete";
      deleteBox.append(delete1);

      let respondBox = document.createElement("div");
      respondBox.style.borderBottomRightRadius = "10px";
      respondBox.style.borderBottomLeftRadius = "10px";
      respondBox.className = "msgOpt";
      messageOptions.append(respondBox);

      let respondLogo = document.createElement("div");
      respondLogo.className = "material-icons";
      respondLogo.innerHTML = "subdirectory_arrow_right";
      respondBox.append(respondLogo);

      let respond1 = document.createElement("div");
      respond1.innerHTML = "respond";
      respondBox.append(respond1);

      meassageDiv11.addEventListener('click' , function(){
         messageOptions.style.display = "flex";
         checkmark.style.display = "none";
         respondBox.scrollIntoView({ behavior: "smooth", block: "end" });
      });
      
      meassageDiv11.addEventListener("mouseleave" , function(){
         messageOptions.style.display = "none";
         checkmark.style.display = "inline";
      });

      let msgId = msgDateId + usernameBox2.innerHTML;

      let msgData = { msgSide: "prim" , id: msgId , user : usernameBox.innerHTML , value: meassage1.innerHTML , sentTime: formattedTime , sentDate: dayOfMonth + "." + monthDisplay , existing: "true"};
      let msgDataString = JSON.stringify(msgData);
      console.log(formattedTime);
      localStorage.setItem('msgData'+ msgId , msgDataString);

      dateBox.scrollIntoView();

      setTimeout(() => {
         location.reload();
      }, 50);

      }, 200);
   }
};

sendMessage1.addEventListener('click' , msg1); 

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

function msg2() {

   if (messageInput2.value === "") {
      console.log("error");
   } else {
      setTimeout(() => {

         let inputValue;

         if (messageInput2.value === "") {
            inputValue = inputMessage.value;
         } else if (inputMessage.value === "") {
            inputValue = messageInput2.value;
         }

         let meassageDiv22 = document.createElement("div");
         meassageDiv22.className = "meassageDiv22";
         messages.append(meassageDiv22);
   
         let meassageDiv2 = document.createElement("div");
         meassageDiv2.className = "meassageDiv2";
         meassageDiv22.append(meassageDiv2);
   
         let meassage2 = document.createElement("p");
         meassage2.className = "message2";
         meassage2.innerHTML = inputValue;
         meassageDiv2.append(meassage2);

         let message2Width = meassage2.getBoundingClientRect().width;
         let message2Height = meassage2.getBoundingClientRect().height;

         const utcDate = new Date();
         const offsetMinutes = utcDate.getTimezoneOffset();
         const gmtPlusOneOffset = 1 * 60 * 60 * 1000;
         const gmtPlusOneDate = new Date(utcDate.getTime() + gmtPlusOneOffset);
         
         let hours = gmtPlusOneDate.getUTCHours();
         let minutes = gmtPlusOneDate.getMinutes();
         let dayOfMonth = utcDate.getDate();
         let month = utcDate.getMonth() + 1;
         let monthDisplay;

         if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

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
   
      const formattedTime = `${hours}:${minutes}`;
         
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
         inputMessage.value = "";
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

         let messageOptions = document.createElement("div");
            messageOptions.className = "messageOptions";
            messageOptions.style.borderTopLeftRadius = "10px";
            messageOptions.style.borderBottomLeftRadius = "10px";
            messageOptions.style.borderBottomRightRadius = "10px";
            dateBox.append(messageOptions);
      
            let editBox = document.createElement("div");
            editBox.style.borderTopLeftRadius = "10px";
            editBox.className = "msgOpt";
            messageOptions.append(editBox);
      
            let editLogo = document.createElement("div");
            editLogo.className = "material-icons";
            editLogo.innerHTML = "edit";
            editBox.append(editLogo);
      
            let edit = document.createElement("div");
            edit.innerHTML = "edit";
            editBox.append(edit);
      
            let deleteBox = document.createElement("div");
            deleteBox.className = "msgOpt";
            messageOptions.append(deleteBox);
      
            let deleteLogo = document.createElement("div");
            deleteLogo.className = "material-icons";
            deleteLogo.innerHTML = "delete";
            deleteBox.append(deleteLogo);
      
            let delete1 = document.createElement("div");
            delete1.innerHTML = "delete";
            deleteBox.append(delete1);
      
            let respondBox = document.createElement("div");
            respondBox.style.borderBottomRightRadius = "10px";
            respondBox.style.borderBottomLeftRadius = "10px";
            respondBox.className = "msgOpt";
            messageOptions.append(respondBox);
      
            let respondLogo = document.createElement("div");
            respondLogo.className = "material-icons";
            respondLogo.innerHTML = "subdirectory_arrow_right";
            respondBox.append(respondLogo);
      
            let respond1 = document.createElement("div");
            respond1.innerHTML = "respond";
            respondBox.append(respond1);
      
            meassageDiv22.addEventListener('click' , function(){
               messageOptions.style.display = "flex";
               checkmark.style.display = "none";
               respondBox.scrollIntoView({ behavior: "smooth", block: "end" });
            });
            
            meassageDiv22.addEventListener("mouseleave" , function(){
               messageOptions.style.display = "none";
               checkmark.style.display = "inline";
            });
   

         let msgId = msgDateId + usernameBox2.innerHTML;

         let msgData = { msgSide: "seco" , id: msgId , user : usernameBox2.innerHTML , value: meassage2.innerHTML , sentTime: formattedTime , sentDate: dayOfMonth + "." + monthDisplay , existing: "true"};
         let msgDataString = JSON.stringify(msgData);

         localStorage.setItem('msgData'+ msgId, msgDataString);

         dateBox.scrollIntoView();

         setTimeout(() => {
            location.reload();
         }, 50);
         }, 200);
   }
};

sendMessage2.addEventListener('click' , msg2);   

leftUser.innerHTML = usernameBox.innerHTML;
rightUser.innerHTML = usernameBox2.innerHTML;

let userSelector = 1;

document.addEventListener("DOMContentLoaded" , function(){

   leftUser.style.backgroundColor = "#41C3FF";
   leftUser.style.color = "white";

   userSelector = 1;
   if (userSelector === 1) {

      inputMessage.value = "";
      sendingDiv2.remove();

      $(inputMessage).keydown(function(event) {
         typeingCounter++
      
         if (typeingCounter === 1 || inputMessage.value !== "") {
      
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
   
      messageInput1.addEventListener('input' , function(){
         inputMessage.value = "";
      });
      
      inputMessage.addEventListener('input' , function(){
         messageInput1.value = "";
      });
   
      sendButton.addEventListener('click' , msg1); 
      sendButton.addEventListener('click' , function(){
      sendingDiv1.remove();
      });

      $(document).keypress(function(event) {
         if (event.which === 13) { 
             msg1();
             sendingDiv1.remove();
         }
      });

      $(inputMessage).keyup(function(event) {
         
   if (inputMessage.value !== "") {
      
   } else {
      setTimeout(() => {
         typeingCounter = 0;
         sendingTextBox.remove();
      }, 800);
   } 

});

   } 
});

