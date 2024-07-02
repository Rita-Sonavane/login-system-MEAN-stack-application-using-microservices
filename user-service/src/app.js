const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/user', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/users', routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
