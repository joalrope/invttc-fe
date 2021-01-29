/* eslint-disable array-callback-return */
import React from 'react'
import {useSelector} from 'react-redux'
import {jsonToTabular} from '../../helpers/jsonTab/json-to-tabular'
import { LandscapeTable } from './LandscapeTable'
import { PortraitTable } from './PortraitTable'


export const ProductInfo = () => {
  const {activeProduct} = useSelector(state => state.product);
  let data
  let mode = 'portrait'


  // const mql = window.matchMedia('(max-width: 600px)')

  // const changeSize = (e) => {
  //   if (e.matches) { 
  //     mode = 'portrait'
  //   } else {
  //     mode = 'landscape'
  //   }  
  // }
  // mql.addEventListener('change', changeSize)
  // changeSize(mql)
  
  data = jsonToTabular(activeProduct, mode);

  if (data === null) {
      return (<></>)
  }

  return (
      <div className="mt-5">
        <h5>Detalle de Producto</h5>
        {(mode === 'portrait') ? <PortraitTable data={data}/> : <LandscapeTable data={data}/>}      
      </div>
  )
}
