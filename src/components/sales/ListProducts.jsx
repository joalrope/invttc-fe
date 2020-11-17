import React from 'react';
import DataTable from "react-data-table-component";
import { useSelector } from 'react-redux';

import '../../assets/css/listproducts.scss'



const columns = [
    {
      name: "Código",
      selector: "code",
    },
    {
      name: "Titulo",
      selector: "title",
    }
  ];


export const ListProducts= () => {

    const {products} = useSelector(state => state.product);
    
    return (
        <div className="product-container">
            <DataTable
                columns={columns}
                data={products}
            />
        </div>
    )
}
