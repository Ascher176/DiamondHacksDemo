import OpenAI from "openai";

const client = new OpenAI({
    apiKey: "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",
});

const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn.",
        },
    ],
});

console.log(completion.choices[0].message.content);