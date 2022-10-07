import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

app.post('/', (req, res) => {
    res.send('Got a POST request')
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
});

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!')
});

app.use('/static', express.static('public'))