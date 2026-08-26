import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppStateProvider } from './context/AppStateContext';
import { ChatProvider } from './context/ChatContext';
import { AppRouter } from './router/AppRouter';
import { ChatWidget } from './components/chat/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <ChatProvider>
          <div className="min-h-screen bg-beige-50 font-inter text-ink-900">
            <AppRouter />
            <ChatWidget />
          </div>
        </ChatProvider>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
