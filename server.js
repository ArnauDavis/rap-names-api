const express = require('express')
const app = express()
const PORT = 8000


const rappers ={
    '21 savage': {
        'age': 32,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Benette',
        'birthLocation': 'Chicago, Illinois'
    },
    'unkown':{
        'age': 0,
        'birthName': 'unkown',
        'birthLocation': 'unkown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
    
})

app.get('/styles.css',(request,response)=>{
    response.sendFile(__dirname + '/styles.css')
})

app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unkown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})