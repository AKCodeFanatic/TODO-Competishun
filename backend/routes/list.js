const router = require("express").Router();
const User = require("../models/user.js");
const List = require("../models/list");


// Create
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, username } = req.body;
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save().then(() => {
                res.status(200).json({ list });
            });
            existingUser.list.push(list);
            existingUser.save();

        } else{
            res.status(200).json({ message : "User does not exist !" });
        }
    } catch (error) {
        console.log(error);
    }
})


// Update
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, username } = req.body;
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            const list = await List.findByIdAndUpdate(req.params.id , {title , body});
            list.save().then(()=>{
                res.status(200).json({message : "Task Updated"});
            });

        }
    } catch (error) {
        console.log(error);
    }
})

// Delete
router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const {username} = req.body;
        const existingUser = await User.findOneAndUpdate(
            { username } , 
            {$pull:{ list:req.params.id  }});

        if (existingUser) {
            const list = await List.findByIdAndDelete(req.params.id).then(()=>{
                res.status(200).json({message : "Task Deleted"});
            });

        }
    } catch (error) {
        console.log(error);
    }
})

// getTask
router.get("/getTasks/:id" , async (req , res) =>{
    const list = await List.find({user : req.params.id}).sort({createdAt : -1});
    if(list.length !== 0){
        res.status(200).json({list});
    } else{
        res.status(200).json({message : "No Task Associated with the user"});
    }
})

module.exports = router;