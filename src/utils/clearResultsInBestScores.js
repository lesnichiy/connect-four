import { BEST_SCORES_LIST_NAME } from './appConstants';

export const clearResultsInBestScores = () => localStorage.removeItem(BEST_SCORES_LIST_NAME);