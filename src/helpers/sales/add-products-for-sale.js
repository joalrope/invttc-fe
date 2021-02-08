
export const getSelectedProduct = (key, brand, activeProduct) => {

  if (key === 'trademark') {
    const {code, title, info} = activeProduct
    const [{salePrice}] = info.filter(({trademark}) => trademark === brand)
    const qty = 1
    const total = qty * salePrice
    
    return {
      code,
      title,
      trademark: brand,
      qty,
      salePrice,
      total
    }
  }
}