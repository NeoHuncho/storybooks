const express = require('express')
const dotenv = require('doteenv')
const { config } = require('dotenv/types')

dotenv.config({path: './config/config.env'})

const app = express()

app.listen()