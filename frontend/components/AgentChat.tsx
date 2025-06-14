// frontend/components/AgentChat.tsx
import React, { useState } from 'react';

const AgentChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setChatLog([...chatLog, `🧑: ${message}`, '🤖: Processing...']);
    setMessage('');
    // Call your backend agent API here
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Agent Chat</h2>
      <div className="h-60 overflow-y-auto mb-2 border rounded p-2 bg-gray-50">
        {chatLog.map((entry, index) => (
          <div key={index} className="mb-1">{entry}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AgentChat;
