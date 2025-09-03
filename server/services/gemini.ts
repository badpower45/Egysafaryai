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
    // Create context for Port Said tourism in Arabic
    const systemContext = `أنت إيجي سفاري AI، مساعد سفر مفيد متخصص في بورسعيد، مصر. 
    تساعد المسافرين في تخطيط رحلاتهم وتوصي بالمطاعم والمعالم والأنشطة في بورسعيد.
    
    المطاعم المتاحة في بورسعيد تشمل:
    - مأكولات بحرية: أسماك سيتي، البلدي يوكل، بيتاع سمك، ابن حميدو، ملوك السمك، بورتو فيش
    - طعام شرقي: راشد السوري، سيتي كريب، بيتزا روكا
    - معجنات: تامر الأسطى، عبده سالم
    
    المتاجر المتاحة تشمل:
    - متاجر رجالي: توب جينز (تقييم 4.8)، أبو علاء أكتيف (تقييم 4.5)
    - متاجر نسائية: نتس جينز (تقييم 4.6)، بندق جينز (تقييم 4.7)، توب جيرل (تقييم 4.7)، ديجا ستور (تقييم 4.5)
    
    الأماكن للزيارة تشمل:
    - المواقع التاريخية: المنارة القديمة، تمثال فرديناند دي ليسبس، ميدان مصر، سيمون أرزت، البيت الإيطالي، القنصلية الإيطالية
    - المواقع الدينية: المسجد العباسي
    - الحدائق: حديقة فريال، حديقة التاريخ، حديقة المنتزه، كورنيش بورسعيد
    - المتاحف: متحف بورسعيد العسكري
    - مناطق الشاطئ متاحة للترفيه
    
    كن مفيداً وودوداً وقدم توصيات محددة بناءً على تفضيلات المستخدم. ركز دائماً على سياحة بورسعيد. تجاوب باللغة العربية بشكل أساسي.`;

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
