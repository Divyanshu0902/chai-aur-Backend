import 'dotenv/config'
import express from "express"

const app = express()
const port = process.env.PORT || 3000

const jokes = [
  {
    "id": 1,
    "title": "The Programmer's Diet",
    "content": "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    "id": 2,
    "title": "The Broken Pencil",
    "content": "Why was the pencil useless? Because it was pointless."
  },
  {
    "id": 3,
    "title": "The Developer's Coffee",
    "content": "How does a programmer make coffee? They use Java."
  },
  {
    "id": 4,
    "title": "The Math Teacher",
    "content": "Why was the math book sad? Because it had too many problems."
  },
  {
    "id": 5,
    "title": "The Database",
    "content": "Why did the database administrator leave his wife? She had too many relationships."
  }
]

app.get("/",(req,res) => {
    res.send("Welcome to Divyanshu's Server!💖💕")
})

app.get('/api/jokes',(req,res) => {
    res.json(jokes)
})

app.listen(port,() => {
    console.log("Server Listening!⚙️ on port "+port)
})