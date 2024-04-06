import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Medllama = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const formatResponse = (response) => response.replace(prompt, '');

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5000/invoke', {
        prompt,
      });
      const botReply = {
        text: response.data.response, // Accessing the 'response' field
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt) {
      setMessages((prevMessages) => [...prevMessages, { text: prompt }]);
      sendMessage();
      setPrompt('');
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden m-5">
      <div className="bg-gray-200 text-gray-700 p-4">
        <div className='flex flex-row gap-5 space-between w-full'>
          <Link to={'/home'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold mb-4">Medical Assistant</h1>
        </div>
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${message.isBot ? 'bg-blue-400 text-white self-start m-2' : 'bg-gray-300 text-gray-800 self-end m-2'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center mt-4">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-1 p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`p-2 rounded-lg bg-blue-500 text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Medllama;
