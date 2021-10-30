import express from "express";

const PORT = 4000;

const app = express();


const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to ${req.url}`);
  next();
}

const handleHome = (req, res) => {
  return res.end();
}

const mustMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const handleProtected = (req, res) => {
  return res.send('Hi! 프라이빗 라운지입니다.')
}

const protectedThis = (req, res, next) => {
  const url = req.url;
  if (url === '/protected') {
    return res.send('Not Allowd');
  }
  next()
}

app.use(mustMiddleware);
app.use(protectedThis);

app.get('/', gossipMiddleware, handleHome);
app.get('/protected', handleProtected);

const handleListening = () => console.log('Server listening for 4000 : 🚀');

app.listen(PORT, handleListening);
