import React from 'react'
import './styles.css'
export const CounterBox = ({label, counter, bcolor}:{label: string, counter: string, bcolor: string}) => {
    let selected_color;
    switch (bcolor) {
      case "red":
        selected_color = "red";
        break;
        case "green": 
        selected_color = "lightgreen";
        break;
      default:
        selected_color = "#8f44fd";
        break;
    }
  return (
    <div className='block-component'>
        <div className='md-wrapper'>
            <input className='md-input' spellCheck="false" readOnly value="345" style={{ borderColor: `${selected_color}`}}/>
            <label className='md-label'>
                Alive
            </label>
        </div>
    </div>
  )
}
