import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Circle from './component/Circle';

function App() {

  const [circleCount, setCircleCount] = useState([]);
  const [colorCount, setColorCount] = useState([])



  function addCircle(){
    setCircleCount([...circleCount, 'any']);
  }
  // setColor([...color, '#a5a5a5'])
  

  
  // useEffect(()=>{
  //   console.log(circleCount)
  // }, circleCount)

  return (
    <div className="App">
      <button onClick={()=>addCircle()} >add Circle</button>
      <span>Color count</span>
      {circleCount && circleCount.map((i, index)=>{
        // console.log(i)
        return <Circle color={{setColorCount, colorCount}} key={index+i} />
      })}
    </div>
  );
}

export default App;
