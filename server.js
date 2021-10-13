const express = require("express");
const qouteRouter = require("./routes/qoutesRoute")

const PORT = 8000;

//server initialization
const app = express();

//middlewares
app.use(express.json())
//routers
app.use("/api/v1/qoutes",qouteRouter)

app.listen(PORT,() => {
    console.log(`hosted on ${PORT}`)
})