var fs= require("fs");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function Img(img){
const response = await openai.createImageVariation(
  fs.createReadStream("img"),
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;
console.log(image_url);
}
Img('mypic.jpg');



