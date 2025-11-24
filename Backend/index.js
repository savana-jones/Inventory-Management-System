require("dotenv").config();
const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const router = require('./Routes/router');
const authRoutes = require("./Routes/auth");

// Middlewares first
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
