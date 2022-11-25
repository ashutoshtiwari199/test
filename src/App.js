import { useEffect, useState } from 'react';
import './App.css';
import Circle from './component/Circle';

function App() {

  const [circleCount, setCircleCount] = useState([]);
  const [colorCount, setColorCount] = useState(0)



  function addCircle(){
    setCircleCount([...circleCount, '']);
  }
  
  useEffect(()=>{
  },[colorCount])

  return (
    <div className="App">
      <button onClick={()=>addCircle()} >add Circle</button>
      <span>Color count {colorCount}</span>
      {circleCount && circleCount.map((i, index)=>{
        return <Circle colorCount={{colorCount, setColorCount}}  key={index+i} />
      })}
    </div>
  );
}

export default App;
