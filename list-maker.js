const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function ListMaker(item,no=10){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `List ${no} ${item} :`,
  temperature: 0.5,
  max_tokens: 200,
  top_p: 1.0,
  frequency_penalty: 0.52,
  presence_penalty: 0.5,
  stop: ["11."],
});
console.log(response.data.choices[0].text);
}

ListMaker("recent articles on CNN");