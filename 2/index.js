require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;

const html = `
    <h1>Name : Divyanshu Kumar</h1><br>
    <p>---------------------------------</p>
    <p><b>Role</b>Full Stack Developer</p>
`

const githubData = {
  "login": "Divyanshu0902",
  "id": 183582931,
  "node_id": "U_kgDOCvFA0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/183582931?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Divyanshu0902",
  "html_url": "https://github.com/Divyanshu0902",
  "followers_url": "https://api.github.com/users/Divyanshu0902/followers",
  "following_url": "https://api.github.com/users/Divyanshu0902/following{/other_user}",
  "gists_url": "https://api.github.com/users/Divyanshu0902/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Divyanshu0902/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Divyanshu0902/subscriptions",
  "organizations_url": "https://api.github.com/users/Divyanshu0902/orgs",
  "repos_url": "https://api.github.com/users/Divyanshu0902/repos",
  "events_url": "https://api.github.com/users/Divyanshu0902/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Divyanshu0902/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Divyanshu Kumar",
  "company": null,
  "blog": "https://github.com/Divyanshu0902",
  "location": "Kolkata, India",
  "email": null,
  "hireable": null,
  "bio": "A pre-final year B.Tech. undergrad, learning Full Stack Web Dev and Data Structures. \r\nInterested in and exploring Edge AI and Agentic AI. ",
  "twitter_username": "DivyanshuK44198",
  "public_repos": 55,
  "public_gists": 0,
  "followers": 16,
  "following": 31,
  "created_at": "2024-10-02T06:53:28Z",
  "updated_at": "2026-09-11T04:43:37Z"
}

app.get('/', (req, res) => {
  res.send('Welcome to my App!!')
})

app.get('/email',(req,res) => {
    res.send('divyanshukr.jeema@gmail.com')
})

app.get('/profile',(req,res) => {
    res.send(html)
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})