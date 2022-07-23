const express = require('express');
const dotenv =  require('dotenv').config()
const port = process.env.PORT || 5000

//initialise express
const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`server is started at port 5000`));
