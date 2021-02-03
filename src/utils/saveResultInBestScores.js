import { BEST_SCORES_LIST_NAME, BEST_SCORES_LIST_LENGTH } from './appConstants';

export const saveResultInBestScores = (name, color, moves, time) => {

  const currentBestScoresList = JSON.parse(localStorage.getItem(BEST_SCORES_LIST_NAME)) || [];

  const bestScoresNewItem = {
    name,
    color,
    moves,
    time
  };

  currentBestScoresList.push(bestScoresNewItem);
  currentBestScoresList.sort((prevItem, nextItem) => (prevItem.moves - nextItem.moves) || (prevItem.time - nextItem.time));
  currentBestScoresList.splice(BEST_SCORES_LIST_LENGTH);

  localStorage.setItem(BEST_SCORES_LIST_NAME, JSON.stringify(currentBestScoresList));
};