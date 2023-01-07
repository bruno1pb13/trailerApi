const express = require('express');
const app = express();

require('./routes')(app)


function Start(){

    app.listen(3000, ()=>{
        console.log('[SERVER] Server is running on port 3000')
    })

}

module.exports = {Start}


