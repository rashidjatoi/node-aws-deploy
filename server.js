const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
})

app.listen(9000, (req, res) => {
    console.log('server running on port 9000')
});