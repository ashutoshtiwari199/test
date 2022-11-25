import React, {useState} from 'react'



function Circle({colorCount}) {

  const props = {...colorCount};

    const [color, setColor] = useState('');
    
    function bgColor(){
        setColor(color ? '': '#f2f2f2');
        props.setColorCount(color ? props.colorCount - 1 : props.colorCount + 1)
    }


  return (
    <div className={`circle ${color ? 'bgColor' : '' }`}  onClick={()=>bgColor()} ></div>
  )
}

export default Circle