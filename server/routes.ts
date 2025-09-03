import type { Express } from "express";
import { createServer, type Server } from "http";
import { getChatResponse, type ChatMessage } from "./services/gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint for Gemini AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, chatHistory } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          error: "Message is required and must be a string" 
        });
      }

      const history: ChatMessage[] = chatHistory || [];
      const response = await getChatResponse(message, history);
      
      res.json({ 
        response,
        timestamp: Date.now()
      });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
