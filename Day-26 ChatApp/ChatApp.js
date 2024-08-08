const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to WebSocket server');
};

window.onload = function () {
    const user = localStorage.getItem('user')
    console.log(user);
    const currentPage = window.location.pathname.split('/').pop();
    if (!user && currentPage !== 'login.html') {
        window.location.href = 'login.html'
    } else if (user != null && currentPage === 'login.html') {
        window.location.href = 'index.html'

    }
}

const user = document.getElementById('user')
const username = localStorage.getItem('user')

user.innerHTML = username

ws.onmessage = (event) => {
    console.log(event);
    const res = JSON.parse(event.data)

    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'messageShow'


    // const username = localStorage.getItem('user')
    const usernamedisplay = document.createElement('p')
    usernamedisplay.style.fontSize = '0.6rem'
    usernamedisplay.style.margin = '0'

    usernamedisplay.textContent = res.user

    messageElement.appendChild(usernamedisplay)

    const messageContent = document.createElement('p');
    messageContent.textContent = res.message;
    messageElement.appendChild(messageContent);


    messagesDiv.appendChild(messageElement);


};

function sendMessage() {
    const input = document.getElementById('messageInput');
    const username = localStorage.getItem('user')
    const data = {
        user: username,
        message: input.value
    }
    const jsonData = JSON.stringify(data)
    ws.send(jsonData);
    input.value = '';
}

// const handleInput = () => {
//     document.getElementById('status')

// }

document.getElementById('sendButton').addEventListener('click', sendMessage);

document.getElementById('messageInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});