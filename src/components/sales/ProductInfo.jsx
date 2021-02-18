/* eslint-disable array-callback-return */
import React from 'react'
import {jsonToTabular} from '../../helpers/jsonTab/json-to-tabular'
import { useWindowSize } from '../../hooks/useWindowSize'
import { LandscapeTable } from './LandscapeTable'
import { PortraitTable } from './PortraitTable'


export const ProductInfo = (product) => {
  const size = useWindowSize();
  let mode

  mode = (size.width <= 775) ? 'portrait' : 'landscape'

  const data = jsonToTabular(product, mode);

  if (data === null) {
      return (<></>)
  }


  return (
      <div className="mt-5">
        <div className="title-frame">
          <h5>Detalle de Producto</h5>
        </div>
        {(mode === 'portrait') ? <PortraitTable data={data}/> : <LandscapeTable key={data} data={data}/>}      
      </div>
  )
}
