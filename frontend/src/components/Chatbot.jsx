import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { MessageSquare, X, Send, Bot, User as UserIcon } from 'lucide-react';

const Chatbot = ({ inline = false }) => {
  const [isOpen, setIsOpen] = useState(inline ? true : false);
  const location = useLocation();
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Justice Connect legal assistant. How can I help you today? (e.g. 'What are my rights?', 'Emergency contact', 'Types of abuse')", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot', { message: userMessage });
      setMessages(prev => [...prev, { text: res.data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the server right now. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Hide the global floating widget on the Home page
  if (!inline && location.pathname === '/') {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && !inline && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Open AI Legal Assistant"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {(isOpen || inline) && (
        <div 
          className={inline 
            ? "w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col overflow-hidden" 
            : "fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-fade-in-up"
          } 
          style={{ height: inline ? '600px' : '500px', maxHeight: inline ? 'none' : '80vh' }}
        >
          
          {/* Header */}
          <div className={`${inline ? 'bg-indigo-900 px-8 py-6' : 'bg-indigo-600 p-4'} text-white flex justify-between items-center`}>
            <div className="flex items-center gap-3">
              <div className={`${inline ? 'bg-indigo-800 p-2' : 'bg-white/20 p-1.5'} rounded-lg flex items-center justify-center`}>
                <Bot className={`${inline ? 'h-6 w-6 text-indigo-200' : 'h-5 w-5'}`} />
              </div>
              <div>
                <h3 className={`font-bold ${inline ? 'text-xl' : 'text-sm'}`}>Justice Connect Assistant</h3>
                <p className={`${inline ? 'text-sm' : 'text-xs'} text-indigo-200`}>Legal & Support Guide</p>
              </div>
            </div>
            {!inline && (
              <button onClick={() => setIsOpen(false)} className="text-indigo-200 hover:text-white transition">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-sm' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1 shadow-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form onSubmit={handleSend} className="flex relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className={`absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center rounded-full ${input.trim() ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-transparent text-gray-400'} transition-colors`}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
