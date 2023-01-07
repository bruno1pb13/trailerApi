const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.send('Hello World!');
})


function Start(){
    
    app.listen(3000, ()=>{
        console.log('[SERVER] Server is running on port 3000')
    })

}

module.exports = {Start}


