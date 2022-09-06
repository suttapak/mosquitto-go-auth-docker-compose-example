const express = require('express')
const { user } = require('./user-data')
const { canSub, canPub } = require('./user')

const app = express()


app.use(express.json())

app.post('/auth', (req, res) => {
    // find username in user data.
    const u = user.find((v) => v.username === req.body.username && v.password === req.body.password)
    // check username.
    if (!u) {
        res.status(400).json({ message: "username or passwrod not found!" })
        return
    }
    // return status OK -> 200
    res.status(200).json(req.body)
    return
})

app.post('/admin_auth', (req, res) => {
    if (req.body.username === "admin") {
        res.status(200).json(req.body)
        return
    }
    res.status(400).json(req.body)
    return
})


app.post('/acl', (req, res) => {
    let authorized = false

    const { acc, clientid, username, topic } = req.body

    /*
     read       = 1
    write      = 2
    readWrite  = 3
    subscribe  = 4
     */
    switch (acc) {
        case 1:
            authorized = canSub(username, topic)
            break;
        case 2:
            authorized = canPub(username, topic)
            break;
        case 3:
            authorized = canSub(username, topic) && canPub(username, topic)
            break;
        case 4:
            authorized = canSub(username, topic)
            break;
        default:
            break;
    }

    // if authorized 
    // check authorized
    if (authorized) {
        res.status(200).json(req.body)
        return
    }
    res.status(400).json(req.body)
    return

})


app.listen(8000, () => console.log('server run on port 8000'))