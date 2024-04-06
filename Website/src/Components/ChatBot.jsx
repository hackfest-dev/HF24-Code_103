import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };

    const handleBlur = () => {
        setChatOpen(false);
    };

    const openChatBotPopup = () => {
        // Specify the URL of the chat bot
        const chatBotUrl = 'https://mediafiles.botpress.cloud/f7f42970-0733-47a9-ae31-9f05a5a51f31/webchat/bot.html';
    
        // Specify the width and height of the pop-up window
        const width = 600;
        const height = 800;
    
        // Calculate the position of the window to center it on the screen
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
    
        // Open the pop-up window
        window.open(chatBotUrl, 'ChatBotWindow', `width=${width},height=${height},left=${left},top=${top}`);
      };

    return (
        <div className="chat-container">
            {chatOpen ? (<div className="overlay" onClick={handleBlur}></div>) : null}
            <button
                className={`chat-button ${chatOpen ? 'active' : ''} mx-auto shadow-xl`}
                onClick={openChatBotPopup}
            >
                {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-sky-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>}
            </button>
        </div>
    );
}

export default ChatBot;
