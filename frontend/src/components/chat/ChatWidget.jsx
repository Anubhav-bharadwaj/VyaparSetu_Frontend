import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useChat } from '../../context/ChatContext';
import { VoiceAdvisorButton } from './VoiceAdvisorButton';
import { cn } from '../ui/Button';

export function ChatWidget() {
  const { messages, isTyping, isOpen, toggleChat, sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue('');
  };

  const handleVoiceTranscript = (text) => {
    sendMessage(text);
  };

  const suggestions = [
    "Which business suits my village?",
    "How can I get a loan?",
    "What government schemes can help me?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-warm w-80 sm:w-96 overflow-hidden flex flex-col h-[500px] border border-beige-200 animate-in slide-in-from-bottom-5 duration-200">
          <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-fraunces font-medium text-lg">VyaparSetu Assistant</h3>
              <p className="text-xs text-emerald-100">AI-Powered Guidance</p>
            </div>
            <button onClick={toggleChat} className="text-emerald-100 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-beige-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                  msg.role === 'user' 
                    ? "bg-emerald-100 text-emerald-900 rounded-tr-none" 
                    : "bg-white border border-beige-200 text-ink-900 rounded-tl-none shadow-sm"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-beige-200 rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1 shadow-sm">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {messages.length < 3 && !isTyping && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  className="text-xs bg-white border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-beige-200 bg-white">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-beige-50 border border-beige-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <VoiceAdvisorButton onTranscript={handleVoiceTranscript} />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isTyping}
                className="bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-warm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
