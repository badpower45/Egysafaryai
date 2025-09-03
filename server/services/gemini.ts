import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || "AIzaSyAwerw8ya9G6jdUwx8rRDluz9GQfkLENw8" 
});

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export async function getChatResponse(message: string, chatHistory: ChatMessage[] = []): Promise<string> {
  try {
    // Create context for Port Said tourism
    const systemContext = `You are Egy Safary AI, a helpful travel assistant specializing in Port Said, Egypt. 
    You help travelers plan their trips, recommend restaurants, attractions, and activities in Port Said.
    
    Available restaurants in Port Said include:
    - Sea Food: Asmak City, elbalady yokal, Beta3 samak, Ibn Hamidou, kings of fish, Porto Fish
    - Oriental Food: Rashed Elsoury, City Crepe, Pizza Roka
    - Pastry: Tamer el Osta, Abdo Salem
    
    Available stores include:
    - Men's Stores: Top Jeans (4.8 rating), Abu Alaa Active (4.5 rating)
    - Women's Stores: Nuts Jeans (4.6 rating), Bondok Jeans (4.7 rating), Top Girl (4.7 rating), Deja Store (4.5 rating)
    
    Places to visit include:
    - Historical sites: The Old Lighthouse, The Statue of Ferdinand de Lesseps, Misr Square, Simon Arzt, The Italian House, The Italian Consulate
    - Religious sites: The Abbasi Mosque
    - Parks: Feryal Garden, History Garden, Al Montazah Garden, Port Said Corniche
    - Museums: Port Said Military Museum
    - Beach areas available for recreation
    
    Be helpful, friendly, and provide specific recommendations based on user preferences. Always stay focused on Port Said tourism.`;

    // Format conversation history
    const conversationHistory = chatHistory.map(msg => ({
      role: msg.role === "user" ? "user" : "model" as const,
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...conversationHistory,
        {
          role: "user",
          parts: [{ text: `${systemContext}\n\nUser question: ${message}` }]
        }
      ],
    });

    return response.text || "I'm sorry, I couldn't process your request. Please try asking again.";
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Sorry, I'm having trouble connecting right now. Please try again in a moment.");
  }
}
