import express from "express";
import morgan from 'morgan';
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");
app.use(loggerMiddleware);

app.set('views' , process.cwd() + '/src/views')
app.set('view engine', 'pug');
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => console.log(`Server listening for ${PORT} : 🚀`);

app.listen(PORT, handleListening);
