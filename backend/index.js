const express = require('express');
const auth =  require("./routes/auth");
const list =  require("./routes/list");
const app = express();
const cors = require('cors');
const PORT = 8000;

require('./connection/connection')


const corsOptions ={
    origin:'https://todo-competishun-jbmx-frontend.vercel.app', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



app.use(express.json());



app.get('/' , (req , res)=>{
    res.send("Hello");
})

app.use("/api/v1" , auth);
app.use("/api/v2" , list);
app.listen(PORT , ()=>{
    console.log("Server started successfully at port " + PORT)
});



