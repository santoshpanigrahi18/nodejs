var express = require('express')
var path = require('path')
var fs= require('fs')
var cors = require('cors')
const bodyParser = require('body-parser')
const {route, auth} = require('./routes/index')
const { APP_PORT } = process.env

/* install express framework */
var app = express()
/*middleware for serving cors */
app.use(cors())

/* View engine setup */
app.set('view engine', 'ejs');
 
/* middleware for parsing body */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* middleware for serving static files */
app.use(express.static(path.join(__dirname, 'public')))

/* middleware for serving basic routes */

app.use('/', route)

/* serving server listen at port */

app.listen(APP_PORT, () => {
    console.log(`server is listening on port ${APP_PORT}`);
});

module.exports =app