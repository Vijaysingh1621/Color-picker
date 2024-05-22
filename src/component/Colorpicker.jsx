import React , {useState} from 'react'
import "./colorpicker.css"

const Colorpicker = () => {

    const [color,setcolor]=useState('#FFFFFF')

    function handlecolorchnage(event){
      setcolor(event.target.value)
    }
  return (
    <div className="color-picker-conatiner">
    <h1>Color picker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
      <p>Selected Color : {color}</p>
    </div>
    <label>Select a color</label>
    <input type='color' value={color} onChange={handlecolorchnage}></input>
   </div>
  )
}

export default Colorpicker