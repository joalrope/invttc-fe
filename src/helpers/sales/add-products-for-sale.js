import { objectId } from "../object-id-generator"

export const getSelectedProduct = (brand, activeProduct) => {

  const {code, title, info} = activeProduct
  const [{salePrice}] = info.filter(({trademark}) => trademark === brand)
  const qty = 1
  const total = qty * salePrice
  
  return {
    id: objectId(),
    code,
    title,
    trademark: brand,
    qty,
    salePrice,
    total
  }
}