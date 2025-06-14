// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const agentRoutes = require('./routes/agent');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/agent', agentRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
