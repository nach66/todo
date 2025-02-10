import mdbRoutes from './Routes/itemRoutesMdb.js'
import psqlRoutes from './Routes/itemRoutesPsql.js'
import connectDB from './config/mdb.js'
import express from 'express'
import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
// hello yoni

dotenv.config()
connectDB()
const app = express()

app.use(cors())
app.use(express.json())

app.use(mdbRoutes)
app.use(psqlRoutes)

app.get('/', (req, res) => {
  res.send('API is running....')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`.yellow.bold
  )
)