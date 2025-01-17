import express from 'express';
import cors from 'cors'; 
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import formRoutes from './routes/metadataSubmission.js';
import logger from './logger.js';
import {htmlPageContent} from './mainPageContent.js';

dotenv.config({ path: '../.env' });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
//just to check that env file loads
console.log('Loaded variable:', process.env.TOKEN_ENDPOINT_URL);

//default settings allows all origins
// At production specify which origins can access your resources
// app.use(cors({
//   origin: 'http://example.com' // front-end domain
// }));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

//a simple frontend page to show backend :) 
app.use('/public', express.static(path.join(__dirname, 'public')));
async function mainAppPage() {
    return htmlPageContent;
}
app.get('/', async (req, res, next) => {
    try {
        const data = await mainAppPage();
        res.send(data);
    } catch (error) {
        logger.error(`Internal Server Error: ${error.message}`, error);
        next(error);
    }
});

app.get('/backend', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });

//here we will send from submissions
app.use('/', formRoutes);

const PORT = process.env.PORT_SERVER || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
