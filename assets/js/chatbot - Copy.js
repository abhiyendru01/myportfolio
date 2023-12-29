const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
let userName = null; // Variable to store user's name
const inputInitHeight = chatInput.scrollHeight;
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined"><img src="./assets/img/logo4.png" width="30px" height="30px"></span></img><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = () => {
    userMessage = chatInput.value.trim().toLowerCase(); // Get user input

    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        

        let botResponse = getBotResponse(userMessage); // Get bot's response based on user input

        const responseChatLi = createChatLi(botResponse, "incoming");
        chatbox.appendChild(responseChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
}

const getBotResponse = (userInput) => {
    // Check for greetings and prompt for name
    if (userInput === "hi" || userInput === "hello" || userInput === "hii") {
        return "Hi there! What's your name?";
    } else if (userName === null) {
        userName = userInput; // Set the user's name
        return `Hi ${userName}! How can I assist you today?`;
    } else {
        return `Hello ${userName}!`;
    }
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        generateResponse();
    }
});

sendChatBtn.addEventListener("click", generateResponse);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
