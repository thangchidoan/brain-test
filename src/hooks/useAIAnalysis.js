import { useState } from 'react';

export const useAIAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiError, setAiError] = useState(null);

  const analyzeWithGemini = async (userChoices, lang, translations) => {
    setIsAnalyzing(true);
    setAiError(null);
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Validate API key
    if (!apiKey || apiKey === '') {
      const errorMessages = {
        vi: "Lỗi cấu hình: Thiếu API key. Vui lòng liên hệ quản trị viên.",
        zh: "配置错误：缺少 API 密钥。请联系管理员。",
        en: "Configuration error: Missing API key. Please contact admin."
      };
      setAiError(errorMessages[lang] || errorMessages.en);
      setIsAnalyzing(false);
      return;
    }

    const userProfile = userChoices.map((c) => 
      `- Question: "${c.question}" -> Selected: "${c.answerText}" (${c.answerType})`
    ).join('\n');

    const langInstruction = lang === 'vi' ? 'Tiếng Việt' : lang === 'zh' ? 'Chinese (Simplified)' : 'English';

    const systemPrompt = `You are a neuropsychology and career counseling expert. Analyze the user's thinking style based on their Left/Right Brain quiz answers.
    
    Requirements:
    1. Write a profound paragraph (3-4 sentences) about how they view the world. Analyze the specific combination of choices.
    2. Suggest 3 personality keywords (e.g., "Strategist", "Dreamer", etc.).
    3. Give one specific, useful self-development tip.
    4. Style: Gentle, sophisticated, academic yet accessible (Digital Ecology/Minimalist style).
    5. LANGUAGE: Respond strictly in ${langInstruction}.`;

    const userPrompt = `User Quiz Data:\n${userProfile}\n\nPlease analyze this profile.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          }),
        }
      );

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAiAnalysis(text);
    } catch (error) {
      const errorMessages = {
        vi: "Xin lỗi, AI đang bận. Thử lại sau.",
        zh: "AI 繁忙，请稍后再试。",
        en: "Sorry, AI is busy. Try again later."
      };
      setAiError(errorMessages[lang] || errorMessages.en);
      console.error("Gemini API Error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setAiAnalysis(null);
    setAiError(null);
    setIsAnalyzing(false);
  };

  return {
    isAnalyzing,
    aiAnalysis,
    aiError,
    analyzeWithGemini,
    reset
  };
};
