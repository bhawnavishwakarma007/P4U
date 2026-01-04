const express = require('express');
const cors = require('cors');
require('dotenv').config();

const errorHandler = require('./middleware/module1Middleware/errorHandler');
const adminRoutes = require('./routes/Auth/adminRoutes');
const jobRoutes = require('./routes/pnr/jobRoutes');
const AuthRoutes = require("./routes/pnr/AuthRoutes");
const jobApplyRoutes = require('./routes/pnr/JobApplyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api', jobRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/jobs', jobApplyRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
