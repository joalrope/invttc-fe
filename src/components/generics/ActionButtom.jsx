import React from 'react';
import '../../assets/css/action-button.scss'

export const ActionButtom = ({type, row, handleClick, title}) => {

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
  const rowSpan = (title) ? 3 : 1

  return (
    [<td rowSpan={rowSpan} className="td-action-button">
      <button className= "action-button" onClick={() => handleClick(row)}>
        <i className={icon}>{title}</i>
      </button>
    </td>,
    <td></td>,
    <td></td>]
  )
}
