require("dotenv").config()

const express = require('express');
const path = require('path')

//const responseTime =require('response-time')

const app = express()

/*app.use(responseTime((req,res,time)=>{
    console.log('time' , time);
    next()
    
}))*/

app.use(workingTime = (req,res,next)=>{
const days = new Date().getDate();
const hours = new Date().getHours();

if ((days==0)||(days==6)||(hours>=9)||(hours<=17)){

    res.sendFile(__dirname + "/views/notfound.html")
} else  {
    next()
}

})


app.use(express.static('views'))
app.use('*/contacts',express.static('views/contacts.html'))
app.use('*/services',express.static( 'views/services.html'))

const PORT = process.env.PORT || 6000
app.listen(5000 , (err)=>{

    if (err) {console.log('errooor')}

    console.log(`Server is runnig 5000`)

})



