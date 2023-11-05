const express =  require('express');
const app= express();

app.get('/', (req, res)=>{
    res.send('Hello world!');
});

app.get('/ramesh', (req, res)=>{
    res.send('Hello Ramesh');
});

app.listen(8080, ()=>{
  console.log('Stated listening on port 8080');
})