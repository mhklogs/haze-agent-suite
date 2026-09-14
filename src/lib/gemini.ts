import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

let client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!apiKey) {
    throw new Error(
      "Gemini API key missing. Add VITE_GEMINI_API_KEY to your .env.local"
    );
  }
  if (!client) {
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}

export const MODEL =
  (import.meta.env.VITE_GEMINI_MODEL as string | undefined) ?? "gemini-2.5-flash";

export interface AgentRequest {
  system: string;
  prompt: string;
  temperature?: number;
}

export async function runAgent({
  system,
  prompt,
  temperature = 0.5,
}: AgentRequest): Promise<string> {
  const res = await getClient().models.generateContent({
    model: MODEL,
    config: {
      systemInstruction: system,
      temperature,
    },
    contents: prompt,
  });
  return res.text ?? "";
}

export async function runAgentStreaming({
  system,
  prompt,
  temperature = 0.5,
  onDelta,
}: AgentRequest & { onDelta: (chunk: string) => void }): Promise<string> {
  const stream = await getClient().models.generateContentStream({
    model: MODEL,
    config: {
      systemInstruction: system,
      temperature,
    },
    contents: prompt,
  });
  let full = "";
  for await (const chunk of stream) {
    const t = chunk.text ?? "";
    full += t;
    onDelta(t);
  }
  return full;
}

export { apiKey, getClient };
export const hasApiKey = () => Boolean(apiKey);
export const AUTH_MESSAGE =
  "Gemini API key missing. Add your Google AI Studio key as VITE_GEMINI_API_KEY in .env.local (or set VITE_GEMINI_MODEL to switch models).";