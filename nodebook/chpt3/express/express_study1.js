import express from 'express';

const app = express();

app.get('/', (req, res, next)=>{
  res.send('Hello world!');
});

app.listen(8080, ()=>{
  console.log('server running at 8080');
})