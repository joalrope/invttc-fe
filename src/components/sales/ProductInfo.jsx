/* eslint-disable array-callback-return */
import React from 'react'
import { useDispatch } from 'react-redux'
import { productClearActive } from '../../actions/products'
import {jsonToTabular} from '../../helpers/jsonTab/json-to-tabular'
import { useWindowSize } from '../../hooks/useWindowSize'
import { ActionButtom } from '../generics/ActionButtom'
import { LandscapeTable } from './LandscapeTable'
import { PortraitTable } from './PortraitTable'


export const ProductInfo = (product) => {
  const dispatch = useDispatch()
  const size = useWindowSize();
  let mode

  mode = (size.width <= 775) ? 'portrait' : 'landscape'

  const data = jsonToTabular(product, mode);

  if (data === null) {
      return (<></>)
  }

  const handleDeleteClick = () => {
    dispatch(productClearActive())
  }


  return (
      <div className="mt-5">
        <div className="title-frame">
          <h5>Detalle de Producto</h5>
          <ActionButtom type={'delete'} row={1} handleClick={handleDeleteClick}/>
        </div>
        {(mode === 'portrait') ? <PortraitTable data={data}/> : <LandscapeTable key={data} data={data}/>}      
      </div>
  )
}
