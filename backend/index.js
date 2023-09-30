const express = require('express');
const auth =  require("./routes/auth");
const list =  require("./routes/list");
const app = express();
const PORT = 3000;

require('./connection/connection')

app.use(express.json());



app.get('/' , (req , res)=>{
    res.send("Hello");
})

app.use("/api/v1" , auth);
app.use("/api/v2" , list);
app.listen(PORT , ()=>{
    console.log("Server started successfully at port " + PORT)
});



