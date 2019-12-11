// Require any needed modules
let express = require('express')

// Declare our app variable
let app = express()

// Declare routes. req = request, res = respond next = middleware
app.get('/', (req, res) => {
    res.send('STUB HOME PAGE')
})

// Listen on a port
app.listen(3000)
