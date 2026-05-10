const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
const ReportRoutes = require('./routes/ReportRoutes');
const ReportListRoutes = require('./routes/ReportListRoutes');
app.use('/api', ReportRoutes);
app.use('/api', ReportListRoutes);

// Server Listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));