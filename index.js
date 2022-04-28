const express = require('express');
const app = express();

app.get("/",(req, res) => {
    res.send('Working!!!');
})

app.listen(process.env.PORT || 4000,(req,res)=>{
    console.log("running on port 4000")
});