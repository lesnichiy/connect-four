import { combineReducers } from 'redux';
import { gameBoard } from './gameBoard';
import { appNavigation } from './appNavigation';
import { players } from './players';
import { winner } from './winner';
import { settings } from './settings';

export default combineReducers({ gameBoard, appNavigation, players, winner, settings });