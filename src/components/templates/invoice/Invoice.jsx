import React from "react";
import { InvoiceBody } from "./InvoiceBody";
import { InvoiceFooter } from "./InvoiceFooter";
import { InvoiceHeader } from "./InvoiceHeader";
import '../../../assets/css/invoice.scss'

export const  Invoice = () => {
    return (
      <div className="invoice-container">
        <InvoiceHeader/>
        <InvoiceBody/>
        <InvoiceFooter/>
      </div>
    );
}
