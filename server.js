
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

const urllib = require('urllib')
const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/teams/:teamName', function (request, response) {
    console.log("reached the server")

    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
                  //  http://data.nba.net/10s/prod/v1/2018/players.json
        if (err) {
            console.log(err)
            throw err; // you need to handle error
        }
        let name = request.params.teamName
        let id = teamToIDs[name]
        // data is Buffer instance
        let results = JSON.parse(data).league.standard
        results = results.filter(result => result.teamId == id && result.isActive)
        results = results.map(result => ({firstName: result.firstName, lastName: result.lastName, pos: result.pos, jersey: result.jersey}))
        response.send(results)
    });
})

app.get('/playerStats/:player', function (request, response) {
    let player = JSON.parse(request.params.player) 

    const link = `https://nba-players.herokuapp.com/players-stats/${player.lastName}/${player.firstName}`
    console.log('reached the server')
    console.log(link)
    urllib.request(link, function (err, data, res) {
        if (err) {
            console.log(err)
            throw err; // you need to handle error
        }
        // data is Buffer instance
        let results = JSON.parse(data)
        // results = results.filter(result => result.teamId == id && result.isActive)
        // results = results.map(result => ({firstName: result.firstName, lastName: result.lastName, pos: result.pos, jersey: result.jersey}))
        response.send(results)
    });
})
