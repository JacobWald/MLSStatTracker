require("dotenv").config();

const express = require('express');
const app = express();

//Setup
app.use(express.json());

//Routers
const indexRouter = require('./routes/index');
const statsRouter = require('./routes/stats.js');

//Routes
app.use('/', indexRouter);
app.use('/stats', statsRouter);


//Error Handling
app.use(function (req, res, next) {
    next(createError(404));
  });
  
  
app.use(function (err, req, res, next) {

//Set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get("env") === "development" ? err : {};

//Render the error page
res.status(err.status || 500);
res.render("error");
});

//Listen
app.listen(9000)
  
module.exports = app;
