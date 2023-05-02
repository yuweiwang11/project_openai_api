import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const port = process.env.PORT || 3005

app.get('/', (req, res) => {
  res.send('openai api')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
