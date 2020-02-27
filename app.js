const express = require('express')

const app = express()

app.get('/hello', (req,res) => {
    res.send({ hello: 'world' });
})

function startServer(){
    console.log('Server started')
}
app.listen(8040, startServer)