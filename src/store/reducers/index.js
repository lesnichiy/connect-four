import { combineReducers } from 'redux';
import { gameBoard } from './gameBoard';
import { appNavigation } from './appNavigation';

export default combineReducers({ gameBoard, appNavigation });