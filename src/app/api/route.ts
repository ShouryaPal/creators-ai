import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { link, tone } = await req.json();

  const prompt = `Given the following ${link} and ${tone}, write 2 LinkedIn posts with the given tone including the YouTube link. Respond with a JSON object in the following format in this don't add hastags in body only make hastags in hastags and don't create same quantity as I provides you: {
    "title": ["title1", "title2"],
    "body": ["body1 with link", "body2 with link"],
    "hashtags": [
      ["#hashtag11", "#hashtag12", "#hashtag13"],
      ["#hashtag21", "#hashtag22", "#hashtag23"]
    ]
  }`;
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 200,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
