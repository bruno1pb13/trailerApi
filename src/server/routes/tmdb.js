require('dotenv-safe').config();

const express = require('express')
const router = express.Router()
const axios = require('axios')

router.use(express.json())
router.use(express.urlencoded({extended: true}))


router.get('/trending', async (req,res)=>{
    try{
        
        let options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/all/day',
            params: {api_key: process.env.TMDB_API_KEY},
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }


        let response = await axios(options)

        if(response) return res.send(response.data)
        res.sendStatus(404)

    }catch(err){
        console.log(err)
        res.status(500).send(JSON.stringify(err))
    }
    
    res.send('Hello World!')
})


module.exports = app => app.use('/tmdb', router)