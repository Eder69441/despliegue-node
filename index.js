const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Hola desde Node.js desplegando en Render. Mi nombre es Edenlin Pablo',
        ambiente: process.env.NODE_ENV || 'development'
    })
})

app.get('/salud', (req, res) => {
    res.json({
        status: 'OK'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
})