const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function IdeaGen(idea){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Brainstorm some ideas combining ${idea}:`,
  temperature: 0.6,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 1,
  presence_penalty: 1,
});
console.log(response.data.choices[0].text);
}
var idea="WordPress plugins ";
IdeaGen(idea);