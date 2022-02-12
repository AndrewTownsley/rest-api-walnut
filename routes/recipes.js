import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let recipes = [
    {
        name: "scrambledEggs",
        id: uuidv4(),
        ingredients: [
          "1 tsp oil",
          "2 eggs",
          "salt"
        ],
        instructions: [
          "Beat eggs with salt",
          "Heat oil in pan",
          "Add eggs to pan when hot",
          "Gather eggs into curds, remove when cooked",
          "Salt to taste and enjoy"
        ]
      },
      {
        name: "garlicPasta",
        id: uuidv4(),
        ingredients: [
          "500mL water",
          "100g spaghetti",
          "25mL olive oil",
          "4 cloves garlic",
          "Salt"
        ],
        instructions: [
          "Heat garlic in olive oil",
          "Boil water in pot",
          "Add pasta to boiling water",
          "Remove pasta from water and mix with garlic olive oil",
          "Salt to taste and enjoy"
        ]
      },
]

// All routes here are starting with /recipes.
router.get('/', (req, res) => {
    res.send(recipes)
});

router.post('/', (req, res) => {
    const recipe = req.body;
    
    recipes.push({...recipe, id: uuidv4() })

    res.send(`Recipe with name ${recipe.name} added to list`)
})

// recipes/2 => req.params

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const findRecipe = recipes.find((recipe) => recipe.id === id)
    res.send(findRecipe)
})

router.delete('/:id', (req, res) => {
    console.log("Delete Route");
    const { id } = req.params;
    const deleteRecipe = recipes.filter((recipe) => recipe.id === id)
    res.send(`Recipe with id:${id} deleted`);
})

router.patch('/:id', (req, res) => {
    console.log("Update Route");
    const { id } = req.params;
    const { name, ingredients, instructions } = req.body;
    const recipe = recipes.find((recipe) => recipe.id === id);

    if(name) recipe.name = name;
    
    if(ingredients) recipe.ingredients = ingredients;
    
    if(instructions) recipe.instructions = instructions;

    res.send(`Recipe with id:${id} has been updated.`)

})

export default router;