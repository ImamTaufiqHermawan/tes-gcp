const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    res.json({
        status: 'success',
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})