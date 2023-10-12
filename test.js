const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const regex = new RegExp(req.query.pattern);
    if (regex.test(req.query.input)) {
        res.send('Matched!');
    } else {
        res.send('Not Matched!');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});