/* 
This starts the node server with front-end and back-end

all routes are defined here, but sql is imported from 
sql.js in the api folder
*/

const express = require('express')
const server = express()
const port = 8080;

// Server static frontend resources
server.use(express.static("frontend"))

// Server static backend api
server.use('/api', express.static("backend"))

// Enable middlewarefor JSON and urlencoded form data
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Book Management End point
server.post('/api/manage-book', (req, res)=> {
    res.status(200)
        .type('json')
        .send(`
            {
                "status": "added book successfully"
            }
        `)
})

// Author Management End point
server.post('/api/manage-author', (req, res)=> {
    res.status(200)
        .type('json')
        .send(`
            {
                "status": "added author successfully"
            }
        `)
})

// User Account Management End point
server.post('/api/manage-user', (req, res)=> {
    res.status(200)
        .type('json')
        .send(`
            {
                "status": "user account created successfully"
            }
        `)
})

// Login End point
server.get('/api/user-login', (req, res)=> {
    res.status(200)
        .type('json')
        .send(`
            {
                "status": "logged in successfully"
            }
        `)
})

// Start the express server
server.listen(port, () => {
    console.log("Backend listening on http://localhost:"+port)
})