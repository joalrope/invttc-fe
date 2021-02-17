import React from 'react'

export const ActionButtom = ({type, row, handleClick}) => {

  let icon;
  let brColor;

  switch (type) {
    case 'delete':
      icon = 'fa fa-backspace'
      brColor = 'red'
      break;

    case 'edit':
      icon = 'fa fa-edit'
      brColor = '#f2bd15'
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
