const express = require('express')
const Datastore = require('nedb-promise')
const insults = new Datastore({filename:'insults.db', autoload:true})
const app = express()

// app.get('/hello', (req,res) => {
//     res.send({ hello: 'world' });
// })

app.get('/insults/:severity', async (req, res) => {
    const documents = await insults.find({ severity: parseInt(req.params.severity) })
    if (documents.length > 0){
        res.json({ "documents": documents })
    } else {
        res.status(404);
        res.send({ error: 'Not found' });
    }
})

function startServer(){
    console.log('Server started')
}
app.listen(8040, startServer)