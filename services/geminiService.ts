import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `Anda adalah AI Assistant untuk "MhiuStore", sebuah platform top-up game. 
        Tugas Anda adalah:
        1. Membantu user memilih paket diamond yang tepat.
        2. Memberikan informasi tentang cara menemukan ID Player/User untuk game populer seperti MLBB, FF, Genshin Impact, PUBG, dan Valorant.
        3. Menjelaskan metode pembayaran yang tersedia di MhiuStore (Gopay, DANA, QRIS, BCA, Mandiri).
        4. Selalu gunakan bahasa Indonesia yang ramah, profesional, dan sedikit gaya "gamer".
        5. Jika ditanya harga, informasikan bahwa harga dapat dilihat di daftar paket masing-masing game.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf kawan, sepertinya koneksi saya terganggu. Silakan hubungi support jika ada kendala mendesak!";
  }
};