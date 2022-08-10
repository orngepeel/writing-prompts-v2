import 'dotenv/config';
import * as prompt from './prompt_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { Router as router} from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

router.get('/genre', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomGenre();

    res.send(JSON.stringify(result));
}));

router.get('/protagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomProtagonist();

    res.json(result);
}));

router.get('/conflict', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomConflict();

    res.json(result);
}));

router.get('/antagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomAntagonist();

    res.json(result);
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});