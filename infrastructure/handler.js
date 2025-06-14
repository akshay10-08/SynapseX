// infrastructure/handler.js
module.exports.agentChat = async (event) => {
  const body = JSON.parse(event.body);
  const reply = `Serverless Bedrock Agent response to: ${body.message}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ reply })
  };
};

module.exports.taskList = async () => {
  const tasks = [
    { id: 1, title: 'Query DynamoDB', status: 'In Progress' },
    { id: 2, title: 'Call Lambda Function', status: 'Completed' }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(tasks)
  };
};
