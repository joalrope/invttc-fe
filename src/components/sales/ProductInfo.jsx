/* eslint-disable array-callback-return */
import React from 'react';
import { jsonToTabular } from '../../helpers/jsonTab/json-to-tabular';
import { useWindowSize } from '../../hooks/useWindowSize';
import { LandscapeTable } from './LandscapeTable';
import { PortraitTable } from './PortraitTable';
import { columns } from '../../assets/data/products.dataConfig';

export const ProductInfo = (product) => {
  const size = useWindowSize();
  let mode;

  mode = size.width <= 775 ? 'portrait' : 'landscape';

  const data = jsonToTabular(product, mode);

  if (data === null) {
    return <></>;
  }

  return (
    <div className='list-product-found-container mt-5'>
      <div className='list-product-found'>
        <h5 className='list-products-found-title'>Detalle de Producto</h5>
        {mode === 'portrait' ? (
          <PortraitTable data={data} columns={columns} />
        ) : (
          <LandscapeTable key={data} data={data} columns={columns} />
        )}
      </div>
    </div>
  );
};
