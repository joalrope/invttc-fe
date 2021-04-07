/* eslint-disable array-callback-return */
import React from 'react'
import {jsonToTabular} from '../../helpers/jsonTab/json-to-tabular'
import { useWindowSize } from '../../hooks/useWindowSize'
import { LandscapeTable } from './LandscapeTable'
import { PortraitTable } from './PortraitTable'
import { columns } from '../../assets/data/customer.dataConfig'



export const ClientInfo = (customer) => {
  const size = useWindowSize();
  let mode

  mode = (size.width <= 775) ? 'portrait' : 'landscape'

  const data = jsonToTabular(customer, mode);

  if (data === null) {
      return (<></>)
  }


  return (
    <div className="list-product-found-container mt-5">
      <div className="list-product-found">
        <h5 className="list-products-found-title">Información del Cliente</h5>
          {(mode === 'portrait') ? <PortraitTable data={data} columns={columns}/> : <LandscapeTable key={data} data={data} columns={columns}/>}
      </div>
    </div>
  )
}
