import React from 'react';
import logo from '../../../assets/images/logo.png';


export const InvoiceHeader = ({customerData, transactionData}) => {
  const customer = customerData;
  const transaction = transactionData;
  
  //TODO: Obtener ownerAddress1 y ownerAddress2 de la base de datos del Propietario
  const ownerAddress1 = 'Zona industrial Los Pinos Manzana 24 Parcela 07 – Estado Bolívar Cod. Postal 8050'
  const ownerAddress2 = 'Telefonos: 0286-9948874/-0414-8664310/0414-8672189 Email- Tractocenter71@gmail.com'
    
  return (
    <div className="invoice-header">
      <div className="left-header">
        <img className="logo" src={logo} alt="" width="80px"/>
        <div className="address">
          <p>{ownerAddress1}</p>
          <p>{ownerAddress2}</p>
        </div>
        <div className="client-data">
          <div className="row-client">
            <div className="descrip">RAZON SOCIAL:</div>
            <div className="to-fill  client-name">{customer.name}</div>
          </div>
          <div className="row-client address">
            <div className="descrip">DOMICILIO FISCAL:</div>
            <div className="to-fill">{customer.address}</div>
          </div>
          <div className="row-client">
            <div className="descrip">CONDICIONES DE PAGO:</div>
            <div className="to-fill">{customer.paymentConditions}</div>
          </div>
        </div>
      </div>
      <div className="right-header">
        <div className="row-info">
          <div className="descrip-order">N° O/DE COMPRA:</div>
          <div className="to-fill-order">{customer.purchaseOrder}</div>
        </div>
        <div className="row-info">
          <div className="descrip-phones">TELÉFONOS:</div>
          <div className="to-fill-phones">{customer.phones}</div>
        </div>
        <div className="row-info">
          <div className="descrip-rif">R.I.F.:</div>
          <div className="to-fill-rif">{customer.rif}</div>
        </div>
        <div className="row-info">
          <div className="descrip-nit">N.I.T.:</div>
          <div className="to-fill-nit"></div>
        </div>
        <div className="row-info">
          <div className="descrip-date">FECHA:</div>
          <div className="to-fill-date">{transaction.date}</div>
        </div>
        <div className="control-number-frame">
          <div className="delivery-note">
            <div className={`delivery-sqr ${(transaction.deliveryMode) && 'isSelected'}`}></div>
            <div className="delivery-descrip">NOTA DE ERNTREGA</div>
          </div>
          <div className="quote">
            <div className={`quote-sqr ${!transaction.deliveryMode && 'isSelected'}`}></div>
            <div className="quote-descrip">COTIZACION</div>
          </div>
          <div className="control-number-counter">
            <div className="centered">
              <div className="control-number-descrip">N° DE CONTROL:</div>
              <div className="control-number-code">{transaction.controlNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}
