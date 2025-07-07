
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function reviewCode(code: string, language: string): Promise<string> {
  const model = 'gemini-2.5-flash-preview-04-17';

  const prompt = `Please review the following ${language} code:\n\n\`\`\`${language}\n${code}\n\`\`\``;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if(error.message.includes('API_KEY_INVALID')){
             return "Error: The provided API key is invalid. Please check your API key and try again.";
        }
        return `Error during API call: ${error.message}`;
    }
    return "An unexpected error occurred while communicating with the API.";
  }
}
