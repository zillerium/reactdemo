import React, {useState, useEffect} from 'react'

const Ex = () => {
  const [windowWidth, setWindowWidth]=useState(window.innerWidth);
console.log("rendering ex ");
  return (
    <div>{windowWidth}
    </div>
  );
}

export default Ex;
