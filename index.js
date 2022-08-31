//hent ip library
const ip = require('ip')
//path
// const path = require('path')
console.log(ip.address())
//hent library express og gem objekt i en kontstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 2650
//json-ception
const en = {
    'en': 'en en',
    'to': 'en to',
    'tre': 'en tre'
}
const to = ['din far', 'din mor', 'din fætter']
const tre = 'https://www.youtube.com/watch?v=v0-TkikR1_g'
//vi laver en meget simpel database
const dataJSON = {
    'een': en,
    'too': to,
    'tree': tre
}
//dokumentation:
const doc = 'parametre:<br>1:json<br>2:array<br>3:link'

app.get('/', express.static('public/'))

//start webserver på port
app.get('/api/*', (req, res)=>{
    console.log('klient tilsluttet')
    if(req.params[0]){
        console.log('parameter: ' + req.params[0])
        if(dataJSON[req.params[0]]){
            res.send(dataJSON[req.params[0]])
        }else{
            res.send(req.params[0] + ' er ikke et gyldigt endpoint. ' + 'Prøv istedet følgende ' + doc)
        }
    }else{
        // res.sendFile(path.join(__dirname, '/index.html'))
        
    }
    
})
app.listen(port, ()=>{
    console.log('server lytter på port ' +port)
})