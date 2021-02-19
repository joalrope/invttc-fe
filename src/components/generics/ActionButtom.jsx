import React from 'react'

export const ActionButtom = ({type, row, handleClick}) => {

  let icon;
  let brColor;
  

  switch (type) {
    case 'delete':
      icon = 'fa fa-backspace'
      brColor = '#dc3545'
      break;

    case 'edit':
      icon = 'fa fa-edit'
      brColor = '#ffc107'
      break;

    case 'select':
      icon = 'fas fa-cart-plus'
      brColor = '#28a745'
      break;

    case 'up':
      icon = 'fas fa-chevron-up'
      brColor = '#28a745'
      break;
    
    case 'down':
      icon = 'fas fa-chevron-down'
      brColor = '#28a745'
      break;
    
    

    
  
    default:
      break;
  }

  const tdLess = {
    border: 0,
    backgroundColor: 'white',
    margin: 0,
    padding: '3px 3px'
  };

  const btnStyle = {
    border: `1px solid ${brColor}`,
    borderRadius: '3px',
    backgroundColor: `${brColor}`,
    marginLeft: '1px'
  };


  return (
    <td style={tdLess}>
      <button style={btnStyle} onClick={() => handleClick(row)}>
        <i className= {icon}></i>
      </button>
    </td>
  )
}
