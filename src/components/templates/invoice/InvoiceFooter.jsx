/* eslint-disable no-extend-native */
import React from 'react';
import { useSelector } from 'react-redux';


export const InvoiceFooter = () => {
  const {productsForSale} = useSelector(state => state.product);
  const locale = 'es-Es'
  const digits = 2
  const ivaTax = 0.16
  const purchaseTotal = Number(productsForSale.reduce((total, {totalItem}) => total + totalItem, 0))
  const ivaTaxAmount = purchaseTotal * ivaTax
  const invoiceTotal = purchaseTotal + ivaTaxAmount


  return (
    <div className="invoice-footer">
      <div className="left-invoice-signature">
        <div className="row-sign">
          <div className="descrip-sign">RECIBIDO (FIRMA)</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">NOMBRE Y APELLIDO</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">CEDULA:</div>
          <div className="to-fill-sign"></div>
        </div>
      </div>
      <div className="right-invoice-signature">
        <div className="row-sign">
          <div className="descrip-sign">RECIBIDO (FIRMA)</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">NOMBRE Y APELLIDO</div>
          <div className="to-fill-sign"></div>
        </div>
        <div className="row-sign">
          <div className="descrip-sign">CEDULA:</div>
          <div className="to-fill-sign"></div>
        </div>
      </div>
      <div className="invoive-summary">
        <div className="row-summ">
          <div className="descrip-summ">SUB-TOTAL:</div>
          <div className="to-fill-summ">{ purchaseTotal.toLocaleString(locale, { maximumFractionDigits: Number(digits), minimumFractionDigits: Number(digits) })}</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">IVA 16% Bs.:</div>
          <div className="to-fill-summ">{ ivaTaxAmount.toLocaleString(locale, { maximumFractionDigits: Number(digits), minimumFractionDigits: Number(digits) }) }</div>
        </div>
        <div className="row-summ">
          <div className="descrip-summ">TOTAL GENERAL:</div>
          <div className="to-fill-summ gral-total">{ invoiceTotal.toLocaleString(locale, { maximumFractionDigits: Number(digits), minimumFractionDigits: Number(digits) })}</div>
        </div>
      </div>
    </div>   
  )
}
