// frontend/components/TaskMonitor.tsx
import React from 'react';

const tasks = [
  { id: 1, title: 'Query DynamoDB', status: 'In Progress' },
  { id: 2, title: 'Call Lambda Function', status: 'Completed' },
];

const TaskMonitor: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Task Monitor</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded">
            <div className="font-medium">{task.title}</div>
            <div className="text-sm text-gray-500">{task.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskMonitor;
