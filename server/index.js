import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import logger from './logger.js';
import formRoutes from './routes/metadataSubmission.js';

dotenv.config({ path: '../.env' });
const PORT = process.env.PORT_SERVER || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    console.log(`${req.method} ${req.url}`);
    next();
});

//managing routes for post and get requests 
app.use('/', formRoutes);
  
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});