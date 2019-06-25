// Get (require in) express - this gives us a function
const express = require('express');

const app = express();
const port = 5000;

// Telling express where to find our static files
// That's things like HTML, CSS, JS ... all the files
app.use( express.static('server/public') );

// Tell our express server to start listening for requests
app.listen( port, () => {
    console.log(`Server is listening on port ${port}`);
})