const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
var contactString = "<div class='social'> <a target='_blank' href='tel:+916283813133'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'></label></label></div> </a> <a href='mailto:rahul.r0644@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/abhiyendru01'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/916283813133'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''>";
let userName = null; // Variable to store user's name
const inputInitHeight = chatInput.scrollHeight;
const messageSound = new Audio('assets/sentmessage.mp3');

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined"><img src="./assets/img/logo4.png" width="30px" height="30px"></span></img><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").innerHTML = message; // Use innerHTML to parse HTML tags
    return chatLi; // return chat <li> element
}

const handleClearChat = () => {
    chatbox.innerHTML = ""; // Clear chat history
    userName = null; // Reset user's name
    chatInput.focus(); // Set focus back to input
}

const generateResponse = (userMessage) => {
    if (!userMessage) return;

    // Play sound when a message is sent
    messageSound.play();

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Typing...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            chatbox.removeChild(incomingChatLi); // Remove typing indicator
            let botResponse = getBotResponse(userMessage); // Get bot's response based on user input

            // Play sound when receiving a response
            messageSound.play();

            const responseChatLi = createChatLi(botResponse, "incoming");
            chatbox.appendChild(responseChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000); // Delay for typing effect
    }, 600);
}


const getBotResponse = (userInput) => {
    userInput = userInput.trim().toLowerCase();

    if (userInput === "hi" || userInput === "hello" || userInput === "hii" || userInput ==="hii rahul") {
        return `Hi there! What's your good name?`;
    }else if (userName === null) {
        userName = userInput;
        if (userName.toLowerCase() === 'aman' || userName.toLowerCase() === 'Aman' || userName.toLowerCase() === 'shobhit') {
            return `<img src="images/chala-ja.gif"></img>`;
        } else {
            return `Hi ${userName}!, ki haal chaal, sab vadiya?`;
        }
    }if (userInput === null){
        return `hor sunao , ${userName}`;
    }if (userInput === 'help'){
        return `Send Keyword to get what you want to know about me...<br><b class="skilltext">'skills'</b> - to know my skills <br><b class="skilltext">'education'</b> - to get my education details <br><b class="skilltext">'contact'</b> - to get ways to connect with me <br><b class="skilltext"> 'projects'</b> - to get details of my projects<br><b class="skilltext"> 'clear'</b> - to clear conversation`;
    }else if (userInput === "clear") {
        handleClearChat();
        return "Hii 👋 ,I'm Rahul <br>send 'hii' to start a chat";
    }if (userInput === "how are you" ||userInput === "How are you"){
        return `I'm Good , what about you ,${userName}?`;
     }if (userInput ==="skills"){
    return `I can comfortably write code in following languages :<br><span class='bold'><br>C++<br>python<br><br>CSS<br>HTML<br>JavaScript</span><br><br>I am well versed with following frameworks :<span class='bold'><br>Bootstrap<br>Next.js<br>ReactJs<br>node.js</span><br>`;
}if (userInput === "aman" || userInput === "daniel" || userInput === "shobhit"){
    return `<img src="images/chl.gif"></img>`;

}if (userInput ==="education"){
    return `I am currently pursuing  Btech in Computer Science  from Lovely Professional University<br>Passing Year : 2026<br><br><br><br>I've done my high school from Kendriya Vidyalaya,jrc<br>Passing Year:2022`;
   
}if (userInput ==="contact"){
    return (contactString);
}if (userInput ==="projects"){
    return `You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/abhiyendru01'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>`;
    }else {
        return `Sorry, I didn't quite catch that, ${userName}. send <b class="skilltext">'help'</b> to know more about me.`;
    }
}


chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        generateResponse(userMessage);
        chatInput.value = "";
    }
});

sendChatBtn.addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    generateResponse(userMessage);
    chatInput.value = "";
});
sendChatBtn.addEventListener("click", () => {
    const userMessage = chatInput.value.trim();
    generateResponse(userMessage);
    chatInput.value = "";
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        generateResponse(userMessage);
        chatInput.value = "";
    }
});
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

