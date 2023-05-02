import express from 'express'
import cors from 'cors'
import generate from './generate.js'

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3005

app.get('/', (req, res) => {
  res.send('openai api')
})

app.post("/generate", async (req,res)=> {
  const queryDescription = req.body.queryDescription
  // console.log("received:", queryDescription)
  // res.json({respopnse: `you sent: ${queryDescription}`})
  try{
    const cvQuery = await generate(queryDescription)
    res.json({response:cvQuery})
  } catch (error){
    console.error(error)
    res.status(500).send("Internal Server Error")
  }

})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
