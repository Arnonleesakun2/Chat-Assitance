const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await cohere.chat({
      message: message,
      model: "command-r-plus",
      temperature: 0.3,
      preamble_override: `คุณคือผู้ช่วย AI ที่ตอบคำถามด้วยภาษาไทยอย่างสุภาพ ใช้ภาษาที่ถูกต้องตามหลักไวยากรณ์ไทย และตอบสั้น กระชับ หากไม่รู้คำตอบให้ตอบว่า "ขออภัย ไม่ทราบ" เท่านั้น ห้ามใช้ภาษาอังกฤษ`,
      connectors: [{ id: "web-search" }],
    });

    res.json({
      status: "success",
      reply:
        response.text ||
        response.generations?.[0]?.text ||
        "ไม่สามารถตอบได้ในขณะนี้",
    });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({
      status: "error",
      error: error.message,
    });
  }
};
