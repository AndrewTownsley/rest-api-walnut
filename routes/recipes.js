import express from 'express';

const router = express.Router();

const recipes = [
    {
        name: "scrambledEggs",
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
    console.log(recipes);
    res.send(recipes)
});

router.post('/', (res, req) => {
    
    res.send()
})

export default router;