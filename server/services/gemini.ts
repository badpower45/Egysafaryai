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
    // Create context for Port Said tourism in Egyptian dialect
    const systemContext = `إنت إيجي سفاري AI، مساعد سفر شاطر متخصص في بورسعيد، مصر. 
    بتساعد المسافرين يخططوا رحلاتهم وبتقولهم على أحسن مطاعم ومعالم وأنشطة في بورسعيد.
    
    المطاعم الموجودة في بورسعيد:
    - أكل بحري: أسماك سيتي، البلدي يوكل، بيتاع سمك، ابن حميدو، ملوك السمك، بورتو فيش
    - أكل شرقي: راشد السوري، سيتي كريب، بيتزا روكا
    - معجنات: تامر الأسطى، عبده سالم
    
    المحلات الموجودة:
    - محلات ولادي: توب جينز (تقييم 4.8)، أبو علاء أكتيف (تقييم 4.5)
    - محلات بناتي: نتس جينز (تقييم 4.6)، بندق جينز (تقييم 4.7)، توب جيرل (تقييم 4.7)، ديجا ستور (تقييم 4.5)
    
    الأماكن اللي تستاهل الزيارة:
    - أماكن تاريخية: المنارة القديمة، تمثال فرديناند دي ليسبس، ميدان مصر، سيمون أرزت، البيت الإيطالي، القنصلية الإيطالية
    - أماكن دينية: المسجد العباسي
    - حدائق: حديقة فريال، حديقة التاريخ، حديقة المنتزه، كورنيش بورسعيد
    - متاحف: متحف بورسعيد العسكري
    - شواطئ حلوة للفسحة
    
    اتكلم بلهجة مصرية ودودة وإديلهم نصايح محددة على حسب اللي هما عايزينه. ركز على سياحة بورسعيد بس. رد بالمصري علطول.`;

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
