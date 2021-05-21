import React from 'react';
import { SearchProduct } from '../sales/SearchProduct';
import { SearchClient } from '../sales/SearchClient';
import { ProductInfo } from '../sales/ProductInfo/ProductInfo';
import { useSelector } from 'react-redux';

export const Search = () => {
  const { activeProduct } = useSelector((state) => state.product);
  const { role } = useSelector((state) => state.auth);

  return (
    role !== 'basic' && (
      <section>
        <fieldset>
          <legend>Busqueda</legend>
          <SearchClient />
          <SearchProduct />
        </fieldset>
        {activeProduct && <ProductInfo product={activeProduct} mode={'portrait'} />}
      </section>
    )
  );
};
