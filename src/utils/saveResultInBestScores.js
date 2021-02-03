import { BEST_SCORES_LIST_LENGTH } from './appConstants';

export const saveResultInBestScores = (player, moves, time) => {

  const currentBestScoresList = JSON.parse(localStorage.getItem('bestScoresList')) || [];

  const bestScoresNewItem = {
    color: player,
    moves,
    time
  };

  currentBestScoresList.push(bestScoresNewItem);
  currentBestScoresList.sort((prevItem, nextItem) => (prevItem.moves - nextItem.moves) || (prevItem.time - nextItem.time));
  currentBestScoresList.splice(BEST_SCORES_LIST_LENGTH);

  localStorage.setItem('bestScoresList', JSON.stringify(currentBestScoresList));
};