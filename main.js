require('./core/format')
const express = require('express')
const cors = require('cors')
const compress = require('compression')
const app = express()
const datas = require("./data/DIEMTHI.json")

app.use(cors())
app.use(compress())

app.get("/data", (req, res) => {
    res.send(JSON.stringify(datas))
})
app.get('/sheet', (req, res) => {
    res.sendFile('./data/DIEMTHI.xlsx', {
        root: __dirname
    })
})

app.get('/', (req, res) => {
    res.sendFile('./Home/index.html', {
        root: __dirname
    })
})


app.listen(28000)