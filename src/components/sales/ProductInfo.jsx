/* eslint-disable array-callback-return */
import React from 'react'
import {useSelector} from 'react-redux'
import {jsonToTabular} from '../../helpers/jsonTab/json-to-tabular'
import { useWindowSize } from '../../hooks/useWindowSize'
import { LandscapeTable } from './LandscapeTable'
import { PortraitTable } from './PortraitTable'


export const ProductInfo = () => {
  const size = useWindowSize();
  const {activeProduct} = useSelector(state => state.product);
  let data
  let mode

  mode = (size.width <= 775) ? 'portrait' : 'landscape'

  data = jsonToTabular(activeProduct, mode);

  if (data === null) {
      return (<></>)
  }


  return (
      <div className="mt-5">
        <h5>Detalle de Producto</h5>
        {(mode === 'portrait') ? <PortraitTable data={data}/> : <LandscapeTable key={data} data={data}/>}      
      </div>
  )
}
