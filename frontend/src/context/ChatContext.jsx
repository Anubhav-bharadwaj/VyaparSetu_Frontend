import React, { createContext, useContext, useState, useCallback } from 'react';
import { mockChat } from '../data/mockChat';
import { useMockDelay } from '../hooks/useMockDelay';

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Namaste! I am your VyaparSetu Assistant. How can I help you grow your business today?", timestamp: new Date().toISOString() }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading: isTyping, runWithDelay } = useMockDelay(800);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = useCallback(async (text) => {
    // Add user message
    const userMsg = { role: 'user', text, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);

    // Simple keyword matching for mock response
    const lowercaseText = text.toLowerCase();
    let replyText = mockChat.find(c => c.triggers[0] === 'default').response;

    for (const item of mockChat) {
      if (item.triggers.some(t => lowercaseText.includes(t))) {
        replyText = item.response;
        break;
      }
    }

    // Simulate network delay
    await runWithDelay();

    // Add assistant message
    const assistantMsg = { role: 'assistant', text: replyText, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, assistantMsg]);

  }, [runWithDelay]);

  return (
    <ChatContext.Provider value={{ messages, isTyping, isOpen, toggleChat, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used within ChatProvider");
  return context;
}
