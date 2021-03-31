import React from "react";
import { useSelector } from 'react-redux';
import moment from 'moment';
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceFooter } from "./InvoiceFooter";
import { InvoiceBody } from "./InvoiceBody";
import '../../../assets/css/invoice.scss'

const customerData = {
  "name": "IMG International",
  "address": "Urbanización Unare II. Avenida Paseo Caroní. Puerto Ordaz Edo. Bolívar",
  "rif": "J-30354578-1",
  "phones": "0286-9945258 - 9947874",
  "purchaseOrder": "6510-85-9",
  "paymentConditions": "CREDITO 30 DÍAS"
}

const transactionData = {
  "date": moment().format("DD/MM/YYYY"),
  "controlNumber": "2102-05",
  "deliveryMode": true
}


export const  Invoice = () => {
  const {productsForSale} = useSelector(state => state.product);
  let clonedProducts = JSON.parse(JSON.stringify(productsForSale));
  let i = 0

  const products = clonedProducts.map(product => {
    i++ 
    return {
      "id": product.id,
      "item": `0${i}`,
      "code": product.code,
      "title": product.title,
      "qty": product.qty,
      "salePrice": product.salePrice,
      "total": product.total
    }
  });

  if (products.length < 11) {
    i = products.length
    while (i < 9){
      i++
      products[i] = {
        "id": i,
        "item": (i < 10) ? `0${i}` : `${i}`,
        "code": "",
        "title": "",
        "qty": "",
        "salePrice": "",
        "total": ""
      } 
    }
  } 


  return (
    <div className="invoice-container">
      <InvoiceHeader customerData={customerData} transactionData={transactionData}/>,
      <InvoiceBody products={products}/>,
      <InvoiceFooter/>
    </div>
  );
}
