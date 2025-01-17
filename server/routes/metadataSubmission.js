import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile, readFile } from 'fs/promises';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route to handle form submissions
router.post('/submit-metadata', async (req, res) => {
  try {
    const formData = req.body;
    const filePath = path.join(__dirname, '../submissions.json');

    let submissions;
    try {
      const data = await readFile(filePath, 'utf-8');
      submissions = JSON.parse(data);
    } catch (err) {
      submissions = [];
    }

    // Add new data and write to file
    submissions.push(formData);
    await writeFile(filePath, JSON.stringify(submissions, null, 2));

    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
