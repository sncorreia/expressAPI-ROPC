const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

// Require routers
const graphRouter = require("./routers/graphRouter");

// Initialize app
const app = express();

// Setup morgan middleware
app.use(morgan('dev'));

// Setup CORS
app.use(cors());

app.use("/api/presence", graphRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
});

module.exports = app;