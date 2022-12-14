import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/Items.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
 
app.listen(process.env.PORT || 8080, () => {
    console.log(`run on port ${process.env.PORT||8080}`)
});

app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.resolve(__dirname, "./client/build")));