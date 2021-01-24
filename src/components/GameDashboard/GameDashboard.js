import store from '../../store/store';
import { useSelector } from 'react-redux';

function GameDashboard(props) {
  const state = store.getState();
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );

  return (
      <div>
        Current Player: {state.gameBoard.currentPlayer}
      </div>
  );
}

export default GameDashboard;