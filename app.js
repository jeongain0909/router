const express = require("express");
const app = express();
app.set("port",3000);

const indexRouter = require("./routes");
const testRouter = require("./routes/test");

app.use("/", indexRouter);

app.listen(app.get("port"), ()=>{
    console.log('Sever On Port ${app.get("port")}');
});