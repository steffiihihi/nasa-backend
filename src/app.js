const express=require('express')
const path=require('path')
const cors=require('cors')
const app=express()

const api=require('./routes/api')

app.use(cors({
    origin: 'https://nasa-frontendb.vercel.app'
}))

// app.use(morgan('combined'))

app.use(express.json())
// app.use(express.static(path.join(__dirname,'..','public')))

app.use('/',api)

// app.get('/*',(req,res)=>{
    // res.sendFile(path.join(__dirname,'..','public','index.html'))
// })

module.exports=app
