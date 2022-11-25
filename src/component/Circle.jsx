import React, {useState} from 'react'



function Circle() {

    const [color, setColor] = useState('');
    const [colorCount, setColorCount] = useState('');
    
    function bgColor(){
        console.log('first')
        setColor(color ? '': '#f2f2f2');
        // addCount();
    }


  return (
    <div className={`circle ${color ? 'bgColor' : '' }`}  onClick={()=>bgColor()} >any</div>
  )
}

export default Circle