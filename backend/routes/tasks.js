// backend/routes/tasks.js
const express = require('express');
const router = express.Router();

const mockTasks = [
  { id: 1, title: 'Query DynamoDB', status: 'In Progress' },
  { id: 2, title: 'Call Lambda Function', status: 'Completed' },
];

router.get('/', (req, res) => {
  res.json(mockTasks);
});

module.exports = router;
