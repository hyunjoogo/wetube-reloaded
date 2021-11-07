import "./db";
import "./models/Video";
import app from "./server";


const PORT = 4000;

const handleListening = () => console.log(`Server listening for ${PORT} : 🚀`);

app.listen(PORT, handleListening);
