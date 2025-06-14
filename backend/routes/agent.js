// backend/routes/agent.js
const express = require('express');
const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  // Call to AWS Bedrock Agent API (mocked)
  const response = `Processed: ${message}`;
  res.json({ reply: response });
});

module.exports = router;
