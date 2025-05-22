const express = require("express");
const fakeData = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

// let info = {
//     name:"sujal",
//     work:"coding",
//     ID:123456,
//     Exprnce:"2 Years",
//     character:"Good",
//     Salary:"19 lpa"
// }

app.get("/users",(req,res)=>{
    res.json(fakeData);
})
// app.get("/api/users",(req,res)=>{
//     for(let i of fakeData){
//         res.send(i);
//     }
// })

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = fakeData.find((user)=>user.id===id);
    res.json(user);
})
app.listen(PORT,()=>{
    console.log(`LISTENING AT PORT : ${PORT}`);
})
