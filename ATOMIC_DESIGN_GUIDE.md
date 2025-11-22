# Atomic Design Structure - Brain Test App

This document outlines the atomic design methodology implemented in the Brain Test App, breaking down the component hierarchy for scalability and maintainability.

## Directory Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   ├── molecules/       # Combinations of atoms
│   ├── organisms/       # Complex component sections
│   └── templates/       # Page-level layouts (future)
├── hooks/               # Custom React hooks
├── services/            # Business logic & utilities
├── types/               # TypeScript types (future)
├── constants/           # App constants & configurations
├── data.ts              # Translation & quiz data
├── App.jsx              # Main app component
└── index.css            # Global styles
```

---

## Level 1: Atoms 🧬

**Purpose**: Fundamental building blocks that cannot be broken down further without losing meaning.

### Components

| Component | Purpose | Props |
|-----------|---------|-------|
| **Button** | Reusable button element | `variant`, `onClick`, `disabled`, `children`, `className` |
| **Icon** | Icon wrapper | `Icon`, `size`, `className`, `strokeWidth` |
| **Text** | Typography component | `as`, `variant`, `className`, `children` |
| **Badge** | Label/tag element | `children`, `icon`, `className` |
| **ProgressBar** | Progress indicator | `percentage`, `variant`, `className` |
| **Card** | Container wrapper | `children`, `className`, `variant` |

### Usage Example

```jsx
import { Button, Text, Badge, Card } from '@/components/atoms';

<Card variant="default">
  <Text variant="heading">Your Title</Text>
  <Button variant="primary" onClick={() => {}}>Click Me</Button>
</Card>
```

---

## Level 2: Molecules 🔗

**Purpose**: Simple component compositions combining atoms for specific UI patterns.

### Components

| Component | Purpose | Composition |
|-----------|---------|-------------|
| **ButtonWithIcon** | Button with icon | Button + Icon |
| **BrainHeader** | Header with brain icon | Badge + Text + Icon |
| **ScoreIndicator** | Score display with bar | Text + ProgressBar |
| **LanguageDropdown** | Language selector dropdown | Button + MenuItem list |
| **QuestionOption** | Quiz answer option | Button + Badge + Text |
| **AIAnalysisButton** | AI analysis trigger | Button + Sparkles icon + Loader |

### Usage Example

```jsx
import { ScoreIndicator, ButtonWithIcon } from '@/components/molecules';

<ScoreIndicator 
  label="Left Brain (Logic)" 
  percentage={65}
/>

<ButtonWithIcon 
  icon={ArrowRight}
  onClick={handleStart}
>
  Start Quiz
</ButtonWithIcon>
```

---

## Level 3: Organisms 🦋

**Purpose**: Complex, semi-independent component sections combining molecules and atoms.

### Components

| Component | Purpose | Contains |
|-----------|---------|----------|
| **LanguageSelector** | Language selection UI | LanguageDropdown + logic |
| **StartScreen** | Quiz entry screen | BrainHeader + ButtonWithIcon |
| **QuizScreen** | Question display interface | Question + QuestionOptions + ProgressBar |
| **ResultScreen** | Results & AI analysis display | ScoreIndicators + AIAnalysisButton + Analysis cards |

### Usage Example

```jsx
import { QuizScreen, ResultScreen } from '@/components/organisms';

{gameState === 'quiz' && (
  <QuizScreen
    question={currentQuestion}
    currentQuestionIndex={currentQuestionIndex}
    totalQuestions={totalQuestions}
    questionIcons={icons}
    onAnswer={handleAnswer}
    optionHeader={t.quiz.optionHeader}
  />
)}

{gameState === 'result' && (
  <ResultScreen
    scores={scores}
    totalQuestions={questionsLength}
    result={getResult()}
    translations={t}
    isAnalyzing={isAnalyzing}
    aiAnalysis={aiAnalysis}
    aiError={aiError}
    onAIAnalyze={callGeminiAnalysis}
    onRetry={resetQuiz}
  />
)}
```

---

## Level 4: Hooks 🎣

**Purpose**: Custom React hooks encapsulating logic and state management.

### Hooks

| Hook | Purpose | Returns |
|------|---------|---------|
| **useQuiz** | Quiz state management | `gameState`, `scores`, `userChoices`, `handleAnswer`, `resetQuiz` |
| **useLanguage** | Language selection logic | `lang`, `isLangOpen`, `changeLanguage`, `toggleLanguageMenu` |
| **useAIAnalysis** | AI analysis state & API calls | `isAnalyzing`, `aiAnalysis`, `aiError`, `analyzeWithGemini`, `reset` |

### Usage Example

```jsx
import { useQuiz, useLanguage, useAIAnalysis } from '@/hooks';

function App() {
  const {
    gameState,
    scores,
    userChoices,
    handleAnswer,
    resetQuiz
  } = useQuiz(questionsData);

  const {
    lang,
    isLangOpen,
    changeLanguage,
    toggleLanguageMenu
  } = useLanguage('vi');

  const {
    isAnalyzing,
    aiAnalysis,
    analyzeWithGemini
  } = useAIAnalysis();

  // Component code...
}
```

---

## Level 5: Services 🔧

**Purpose**: Business logic, API calls, and utility functions.

### Services

| Service | Purpose | Methods |
|---------|---------|---------|
| **resultService** | Result calculation logic | `getResult(scores, questions, translations)` |
| **iconService** | Icon collection management | `getQuestionIcons()` |

### Usage Example

```jsx
import { getResult, getQuestionIcons } from '@/services';

const result = getResult(scores, questionsData, translations);
const icons = getQuestionIcons();
```

---

## Full Component Hierarchy Example

```
App (Page)
├── LanguageSelector (Organism)
│   └── LanguageDropdown (Molecule)
│       └── Button (Atom)
├── StartScreen (Organism)
│   ├── BrainHeader (Molecule)
│   │   ├── Badge (Atom)
│   │   ├── Text (Atom)
│   │   └── Icon (Atom)
│   └── ButtonWithIcon (Molecule)
│       ├── Button (Atom)
│       └── Icon (Atom)
├── QuizScreen (Organism)
│   ├── Text (Atom)
│   ├── QuestionOption (Molecule) [Multiple]
│   │   └── Button (Atom)
│   └── ProgressBar (Atom)
└── ResultScreen (Organism)
    ├── Card (Atom)
    ├── ScoreIndicator (Molecule) [Multiple]
    │   ├── Text (Atom)
    │   └── ProgressBar (Atom)
    ├── AIAnalysisButton (Molecule)
    └── Card (Atom) [Multiple]
```

---

## Benefits of This Structure

✅ **Scalability** - Easy to add new features  
✅ **Maintainability** - Clear component responsibilities  
✅ **Reusability** - Components used across multiple sections  
✅ **Testability** - Each level can be tested independently  
✅ **Performance** - Optimized component isolation  
✅ **Documentation** - Clear component hierarchy  

---

## Next Steps for Enhancement

- [ ] Create TypeScript types in `src/types/`
- [ ] Add unit tests for atoms & molecules
- [ ] Implement Storybook for component documentation
- [ ] Add component prop validation
- [ ] Create constants file for magic strings
- [ ] Implement error boundaries

---

## File Organization Best Practices

Each component folder should follow this pattern:

```
components/atoms/
├── Button.jsx
├── Icon.jsx
├── Text.jsx
├── Badge.jsx
├── ProgressBar.jsx
├── Card.jsx
└── index.js          # Barrel export
```

Use barrel exports for clean imports:

```jsx
// ✅ Good
import { Button, Text, Badge } from '@/components/atoms';

// ❌ Avoid
import Button from '@/components/atoms/Button.jsx';
import Text from '@/components/atoms/Text.jsx';
```
