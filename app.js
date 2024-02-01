const express = require("express");
const app = express();
app.set("port",3000);

const indexRouter = require("./routes");
const testRouter = require("./routes/test");

app.use("/", indexRouter);

app.use("/test", testRouter);

app.listen(app.get("port"), ()=>{
<<<<<<< HEAD
    console.log(`Sever On Port ${app.get("port")}`);
});
=======
    console.log('Sever On Port ${app.get("port")}');
});
>>>>>>> 1ae657e2b9bd16e3b462c61f57d7babaaacbe6a5
