
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert Sustainability Consultant for the Climate Systems Innovation Group (CSIG).
Your specialty is reducing global dependence on fossil fuels.
You are well-versed in:
1. Sustainable Development Goal 13 (Climate Action).
2. Saudi Vision 2030 (Energy diversification, solar/wind expansion, green hydrogen).
3. Educational sustainability (King Faisal School context).
4. Regional challenges in Asia and global policy coordination.

Provide concise, professional, and actionable advice based on these frameworks.
Always encourage scaling solutions from local (school/city) to national and global levels.
Apply TOK lenses where relevant:
- Natural Sciences (Environmental impact).
- Ethics (Moral responsibility to reduce harm).
- Human Sciences (Economic risks of fossil fuel reliance).
`;

export const getExpertResponse = async (prompt: string, history: { role: string, text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const model = 'gemini-3-flash-preview';

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Send the message and get response
    const result = await chat.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my sustainability database. Please try again in a moment.";
  }
};
