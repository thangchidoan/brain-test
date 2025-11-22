/**
 * Atomic Design Structure Breakdown
 * ================================
 * 
 * ATOMS (Basic Building Blocks)
 * ├── Button
 * ├── Icon
 * ├── Text
 * ├── Badge
 * ├── ProgressBar
 * └── Card
 * 
 * MOLECULES (Combinations of Atoms)
 * ├── ButtonWithIcon (Button + Icon)
 * ├── BrainHeader (Badge + Text + Icon)
 * ├── ScoreIndicator (Text + ProgressBar)
 * ├── LanguageDropdown (Button + Menu)
 * ├── QuestionOption (Button + Badge + Text)
 * └── AIAnalysisButton (Button + Sparkles + Loader)
 * 
 * ORGANISMS (Complex Sections)
 * ├── LanguageSelector (Dropdown + Logic)
 * ├── StartScreen (BrainHeader + ButtonWithIcon)
 * ├── QuizScreen (Questions + Options + Progress)
 * └── ResultScreen (Scores + Analysis + Actions)
 * 
 * HOOKS (State & Logic)
 * ├── useQuiz (Quiz state management)
 * ├── useLanguage (Language selection)
 * └── useAIAnalysis (AI integration & API calls)
 * 
 * SERVICES (Utilities & Business Logic)
 * ├── resultService (Result calculation)
 * └── iconService (Icon management)
 * 
 * PAGE (App.jsx)
 * └── Main orchestration of all components
 */

export const ATOMIC_DESIGN_STRUCTURE = {
  atoms: [
    'Button',
    'Icon',
    'Text',
    'Badge',
    'ProgressBar',
    'Card'
  ],
  molecules: [
    'ButtonWithIcon',
    'BrainHeader',
    'ScoreIndicator',
    'LanguageDropdown',
    'QuestionOption',
    'AIAnalysisButton'
  ],
  organisms: [
    'LanguageSelector',
    'StartScreen',
    'QuizScreen',
    'ResultScreen'
  ],
  hooks: [
    'useQuiz',
    'useLanguage',
    'useAIAnalysis'
  ],
  services: [
    'resultService',
    'iconService'
  ]
};
