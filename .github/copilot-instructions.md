# Copilot Instructions for AI Agents

## Project Overview

- **brain-test-app** is a React (with Vite) quiz app using atomic design principles.
- The app assesses user's thinking style (left/right/balanced brain) via a multi-question quiz, with optional AI-powered analysis (Gemini API).
- UI is structured by atomic design: `atoms`, `molecules`, `organisms`, and (future) `templates`.

## Key Architecture & Patterns

- **Component Hierarchy:**
  - `src/components/atoms/`: Smallest UI elements (Button, Icon, Text, etc.)
  - `src/components/molecules/`: Combinations of atoms for specific UI patterns (e.g., ButtonWithIcon, ScoreIndicator).
  - `src/components/organisms/`: Complex sections (QuizScreen, ResultScreen, etc.)
  - All components are exported via their respective `index.js` for easy imports.
- **State & Logic:**
  - Main state is managed in `App.jsx` (language, quiz state, scores, AI analysis state).
  - Custom hooks in `src/hooks/` (e.g., `useQuiz.js`, `useAIAnalysis.js`) encapsulate quiz and AI logic.
  - Quiz data and translations are in `src/data.ts` (multi-language support: vi, en, zh).
- **Services:**
  - `src/services/resultService.js`: Computes quiz result (left/right/balanced) from scores.
  - `src/services/iconService.js`: Provides consistent icons for quiz questions.
- **Styling:**
  - Tailwind CSS is used for all styling. Global styles in `index.css`.

## Developer Workflows

- **Start Dev Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Lint:** `npm run lint`
- **Format:** `npm run format`
- **Deploy (GitHub Pages):** `npm run deploy` (builds, then deploys from `dist/`)

## Project-Specific Conventions

- **Atomic Design:** All new UI must fit the atomic/molecule/organism structure. See `ATOMIC_DESIGN_GUIDE.md` for details and examples.
- **Language Support:** All user-facing text comes from `src/data.ts` translations. Never hardcode UI strings.
- **AI Integration:** Use `useAIAnalysis.js` and Gemini API for AI-powered result analysis. API key is read from `VITE_GEMINI_API_KEY` in environment.
- **Result Calculation:** Use `getResult()` from `resultService.js` for all quiz result logic.
- **Icons:** Use `iconService.js` for question icons to ensure consistency.

## Integration Points

- **Gemini API:** For AI analysis, see `useAIAnalysis.js` for prompt structure and API usage.
- **Multi-language:** All quiz and result text is in `src/data.ts` under the `translations` object.

## References

- See `ATOMIC_DESIGN_GUIDE.md` for atomic design details and usage examples.
- See `README.md` for Vite/React basics.
- See `src/data.ts` for quiz structure and translations.

---

For new features, follow atomic design, use hooks for logic, và giữ mọi UI text trong translations.

**Important notes:**

- Do not create new markdown files.
- Explanations must be concise, clear, and straight to the point. Avoid wordiness.
