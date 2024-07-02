const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true });

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
