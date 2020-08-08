const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
// const passport = require("passport");
// const session = require("express-session");

// Load env vars
dotenv.config({ path: path.join(__dirname, "config/config.env") });

// Passport config
// require("./config/passport")(passport);

// Connect to the Mongo database
const connectToDb = require("./config/db");
connectToDb();

// Parse incoming JSON data
app.use(express.json());

// Expression middleware (must be above passport's)
// app.use(
//   session({
//     secret: "catkeyboard",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// REST API routes
const users = require("./routes/users");
app.use("/api/users", users);

const contacts = require("./routes/contacts");
app.use("/api/contacts", contacts);

const tasks = require("./routes/tasks");
app.use("/api/tasks", tasks);

// Custom error handling
const error = require("./middlewares/error");
app.use(error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
