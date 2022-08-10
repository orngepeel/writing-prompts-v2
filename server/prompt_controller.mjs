import 'dotenv/config';
import * as prompt from './prompt_model.mjs';
import { Express } from 'express';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/genre', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomGenre();

    res.json(result);
}));

app.get('/protagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomProtagonist();

    res.json(result);
}));

app.get('/conflict', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomConflict();

    res.json(result);
}));

app.get('/antagonist', asyncHandler(async (req, res) => {
    const result = await prompt.findRandomAntagonist();

    res.json(result);
}));