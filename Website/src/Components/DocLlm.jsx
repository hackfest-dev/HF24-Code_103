import { useState } from 'react';
import axios from 'axios';

const DocLlm = ({prompt, setPrompt, isLoading, setIsLoading, messages, setMessages, handleInputChange, doctorJSON}) => {

  const formatResponse = (response) => response.replace(prompt, '');

//   const sendMessage = async () => {
//     try {
//         const jsoncontent = JSON.stringify(doctorJSON)
//         // const js_doc = {'_ids':doctorJSON}
//         console.log(jsoncontent)
//       setIsLoading(true);
//       const response = await axios.post('http://localhost:5005/handleQ', jsoncontent);
//       const botReply = {
//         text: response.data.response, // Accessing the 'response' field
//         isBot: true,
//       };
//       setMessages((prevMessages) => [...prevMessages, botReply]);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
const sendMessage = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:5005/handleQ', doctorJSON, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const botReply = {
        text: response.data.response, // Accessing the 'response' field
        isBot: true,
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error here, like setting an error state
    } finally {
      setIsLoading(false);
    }
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
    <div>
      {/* <h1>Llama Chatbot</h1> */}
      <div className='text-center'>
        {messages.map((message, index) => (
          <div key={index} className={message.isBot ? 'bot-message' : 'user-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className='mx-auto'>
        <button type="submit" disabled={isLoading} onClick={sendMessage} className='bg-white'>
          Send
        </button>
      </form>
      
    </div>
  );
};

export default DocLlm;