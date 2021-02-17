import React from 'react';


export const ListProductsFound = ({products, onClick}) => {
  
  return (
    <table className="found-products-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => (
            <tr key={product.id} onClick={() => onClick(product)}>
              <td>{product.code}</td>
              <td>{product.title}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
