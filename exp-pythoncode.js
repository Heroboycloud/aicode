const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function codeExplain(prompt,max_words=60){
const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: prompt,
  temperature: 0,
  max_tokens:max_words,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
console.log(response.data.choices[0].text);
}
var text=  "//Javascript" + "\nsetTimeout(hades,1000);" +  "\n//Explain what the code does:"
codeExplain(text);
