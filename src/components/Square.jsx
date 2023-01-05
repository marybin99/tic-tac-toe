import { useState } from "react";

function Square({ num, onClick }) {  //props 넣어주기
  // const [num, setNum] = useState(null);
  return (
    <button
      className="square"
      onClick={() => {
        // setNum('X')
        onClick();
      }}>
      {num}
    </button>
  );
}

export default Square;
