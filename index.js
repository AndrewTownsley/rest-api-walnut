import express from 'express';
import bodyParser from 'body-parser';
import recipeRoutes from './routes/recipes.js';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => res.send("*** Hello from Home Page ***"))

app.listen(PORT, () => console.log(`Server running on port:${PORT}`))