const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function interviewQuestion(listno=8,job_title="JavaScript programmer"){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Create a list of ${listno} questions for my interview with a ${job_title} :`,
  temperature: 0.5,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
console.log(response.data.choices[0].text);
}
interviewQuestion();