const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function RecipeCreator(ingredients){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Write a recipe based on these ingredients and instructions:\n\nIngredients:\n${ingredients} \n\nInstructions:`,
  temperature: 0.3,
  max_tokens: 120,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
console.log(response.data.choices[0].text);
}
RecipeCreator("\nEggs\ntomato\nsalt");