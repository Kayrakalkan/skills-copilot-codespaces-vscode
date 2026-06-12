// create webserver
const express = require('express');
const app = express();
const port = 3000;

// create comment endpoint
app.post('/comment', (req, res) => {
    // get comment from request body
    const comment = req.body.comment;

    // save comment to database (not implemented)

    // return success response
    res.status(200).json({ message: 'Comment saved successfully' });
});

// start webserver
app.listen(port, () => {
    console.log(`Webserver running at http://localhost:${port}`);
}); 