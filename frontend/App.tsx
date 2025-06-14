// frontend/App.tsx
import React from 'react';
import AgentChat from './components/AgentChat';
import TaskMonitor from './components/TaskMonitor';
import AgentSelector from './components/AgentSelector';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🤖 SynapseX Dashboard</h1>
      <AgentSelector />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AgentChat />
        <TaskMonitor />
      </div>
    </div>
  );
};

export default App;
