import 'reflect-metadata'
import express from 'express'
import './database'

const app = express()

app.get('/', (req, res) => {
    return res.send('Olá, NLW')
} )

app.post('/test-post', (req, res) => {
    return res.json('Olá, NLW método post')
} )

app.listen(4000, () => console.log('Server is running on port 4000'))