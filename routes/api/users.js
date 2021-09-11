const express = require("express");
const router = express.Router();
const users = require("../../Users");
const uuid = require("uuid");

//Gets All users
router.get("/", (req, res) => res.json(users));

//Get Single users
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `User not found with id: ${req.params.id}` });
  }
});

// Create a User
router.post("/", (req, res) => {
  const createdUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  }

  if(!createdUser.name || !createdUser.email){
     return res.status(400).json({message:"Please enter a name and email"});
  }
  
  users.push(createdUser);
  res.send(users);

});

//Update user profile
router.put("/:id", (req, res) => {
  const foundUser =  users.some((user) => user.id === parseInt(req.params.id));

  if(foundUser){
     const updateUser = req.body;
     users.forEach(user => {
       if(user.id === parseInt(req.params.id)){
          user.name = updateUser.name ? updateUser.name : user.name;
          user.email = updateUser.email ? updateUser.email : user.id;

          res.json({message: "User is updated", user})
       }
     })
  }
  else{
    res.status(400).json({message:`No user found to update at the id : ${req.params.id}`});
  }
})

router.delete("/:id", (req, res) => {
  let id = req.params.id;

   const foundUser =  users.some((user) => user.id === parseInt(id));
   if(foundUser){
     
        res.json({
          msg:"User is deleted",
          users: users.filter(user => user.id !== parseInt(req.params.id))
        })
       }
  else{
    res.status(404).json({message:`No user found at the id : ${req.params.id}`});
  }
})



module.exports = router;
