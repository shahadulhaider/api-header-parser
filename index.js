const express = require('express');
const cors = require('cors');
const app = express();

//get our API routes
const api = require('./routes/api');

//middleware
app.use(cors({ optionsSuccessStatus: 200 }));

//static files
app.use(express.static(__dirname + '/public'));


//Routes
app.use('/api', api);
app.use('/', api);

//startring the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API running on port ${port}...`);
});
