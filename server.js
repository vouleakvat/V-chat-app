const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
let users =[
    {id: 1, name:'vouleak',message:"Hello",color:"pink", password:"234"},
    {id: 2, name:"Sreynouth",message:"Hello baby",color:"yellow", password:"234" },
    {id: 3, name:"Mina",message:"Hello baby",color:"yellow", password:"234" },
]
app.get('/users', (req, res) => res.send(users));

app.post('/users', (req,res) => {
    let user={
      name: req.body.name,
      message:req.body.message,
      color: req.body.color,
    }
    users.push(user);
    res.send(users);
});

