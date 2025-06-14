// frontend/components/AgentSelector.tsx
import React from 'react';

const AgentSelector: React.FC = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">Choose Your Agent:</label>
      <select className="w-full border p-2 rounded">
        <option>Sales Assistant</option>
        <option>DevOps Bot</option>
        <option>Data Analyst</option>
        <option>Web3 Agent</option>
      </select>
    </div>
  );
};

export default AgentSelector;
