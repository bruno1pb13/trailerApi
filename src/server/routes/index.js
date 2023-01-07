
module.exports = (app)=>{
    //Import here the server routes
    
    require('./serverData')(app) // server data info
    require('./users')(app) // users routes
    
    }