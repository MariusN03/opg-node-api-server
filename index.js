//hent ip library
const ip = require('ip')
//IP console log
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
    '1': en,
    '2': to,
    '3': tre
}
//dokumentation:
const doc = 'parametre:<br>1: json<br>2: array<br>3: link'

//serve statisk mappe i rod
app.use('/', express.static('public/'))

//start webserver på port lytter på /api
app.get('/api/dinmor', (req, res)=>{
    const object = {
        'Helle Thorning Schmidt': {
            'status': 'trampertøs og sej',
            'hold': 'fisketorvet'
        },
        'Angela Merkel': {
            'status': 'i hvert fald ikke sur',
            'hold': 'Tyskerland'
        },
        'Helle': {
            'status': 'farligt',
            'hold': 'Avedøre tandregulering'
        }
    }
    res.json(object)
    //res.send('Du er kommet til api\'et hos skæg med tal <br> prøv følgende ' + doc)
    // if(req.params[0]){
    //     console.log('parameter: ' + req.params[0])
    //     if(dataJSON[req.params[0]]){
    //         res.send(dataJSON[req.params[0]])
    //     }else{
    //         res.send(req.params[0] + ' er ikke et gyldigt endpoint. ' + 'Prøv istedet følgende ' + doc)
    //     }
    // }
    
})

app.get('/api/dinfar', (req, res)=>{
    const object = {
        'Lars Løkke Rasmussen': {
            'status': 'vred og farlig',
            'hold': 'vinderholdet'
        },
        'Kasper Schmeichel': {
            'status': 'mur',
            'hold': 'OGC Nice'
        }
    }
    res.json(object)
})

app.listen(port, ()=>{
    console.log('server lytter på port ' +port)
})