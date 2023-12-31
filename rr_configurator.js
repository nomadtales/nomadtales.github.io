const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + "configurator.html");
})

app.get('/esptool', (req, res) => {
    res.sendFile(__dirname + "/public/esptool/" + "esptool.html");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})