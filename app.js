const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: path.join(__dirname, "config/config.env") });

// Connect to the Mongo database
const connectToDb = require("./config/db");
connectToDb();

// Parse incoming JSON data
app.use(express.json());

// REST API routes
const users = require("./routes/users");
app.use("/api/users", users);

const contacts = require("./routes/contacts");
app.use("/api/contacts", contacts);

// Custom error handling
const error = require("./middlewares/error");
app.use(error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
