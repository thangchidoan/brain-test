export const getResult = (scores, questionsData, translations) => {
  const total = questionsData.length;
  if (total === 0) return translations.result.results.balanced;

  if (scores.A > scores.B) {
    return translations.result.results.left;
  } else if (scores.B > scores.A) {
    return translations.result.results.right;
  } else {
    return translations.result.results.balanced;
  }
};
