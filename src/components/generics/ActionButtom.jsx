import React from 'react';
import '../../assets/css/action-button.scss'

export const ActionButtom = ({type, row, handleClick}) => {

  let icon;

  switch (type) {
    case 'delete':
      icon = 'fa fa-backspace'
      break;

    case 'edit':
      icon = 'fa fa-edit'
      break;

    case 'select':
      icon = 'fas fa-cart-plus'
      break;

    case 'up':
      icon = 'fas fa-chevron-up'
      break;
    
    case 'down':
      icon = 'fas fa-chevron-down'
      break;
    
    default:
      break;
  }


  return (
    <td className="td-action-button">
      <button className= "action-button" onClick={() => handleClick(row)}>
        <i className={icon}></i>
      </button>
    </td>
  )
}
