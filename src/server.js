import express from "express";
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const home = (req, res) => {
  return res.end();
}

const login = (req, res) => {
  return res.end();
}

app.use(loggerMiddleware);
app.get('/', home);
app.get('/login', login);

const handleListening = () => console.log('Server listening for 4000 : 🚀');

app.listen(PORT, handleListening);
