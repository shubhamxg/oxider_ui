import React from 'react'
import './styles.css'
export const CounterBox = ({clabel, counter, bcolor}:{clabel: string, counter: string, bcolor: string}) => {
    let selected_color;
    switch (bcolor) {
      case "red":
        selected_color = "red";
        break;
        case "green": 
        selected_color = "lightgreen";
        break;
        case "grey": 
        selected_color = "#373942";
        break;
        case "dark-red": 
        selected_color = "#C70039";
        break;
        case "orange": 
        selected_color = "#FF5733";
        break;
        case "yellow": 
        selected_color = "#FFBF00";
        break;
      default:
        selected_color = "#8f44fd";
        break;
    }
  return (
    <div className='block-component'>
        <div className='md-wrapper'>
            <input className='md-input' spellCheck="false" readOnly value={counter} style={{ borderColor: `${selected_color}`}}/>
            <label className='md-label'>
                {clabel}
            </label>
        </div>
    </div>
  )
}
