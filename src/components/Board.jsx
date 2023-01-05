import Square from "./Square";
import { useState } from "react";

function Board({squares, onClick}) {
  // jars 사용할 수 있는 공간
  // const [squares, setSquares] = useState([]); 
  // const [xIsNext, setXIsNext] = useState(true);
  
  // const status = "Next player: " + (xIsNext? 'X':'O');
  const renderSquare = (i) => {
    return <Square num={squares[i]} onClick={() => onClick(i)} />;
  };

  

  return (
    // jsx의 공간
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}



export default Board;
