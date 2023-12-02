const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function ReviewCreator(review_type,name, attributes){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Write a ${review_type} review based on these notes:\n\nName: ${name}\${attributes}\n\nReview:`,
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
console.log(response.data.choices[0].text);
}
ReviewCreator("app","Termux","coding fast terminal");
