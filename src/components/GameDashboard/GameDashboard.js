import store from '../../store/store';
import { useSelector } from 'react-redux';

function GameDashboard(props) {
  const currentPlayer = useSelector( state => state.gameBoard.currentPlayer );

  return (
      <div>
        Current Player: {currentPlayer}
      </div>
  );
}

export default GameDashboard;