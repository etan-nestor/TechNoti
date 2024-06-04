const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const recordRoutes = require('./src/routes/recordRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin:'https://tech-noti-bf.vercel.app/',
  credentials: true,
}));

app.use(bodyParser.json());
app.use('/api/records', recordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
