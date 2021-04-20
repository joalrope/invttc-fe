import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Invoice } from '../templates/invoice/Invoice';

export const InvoicePdfComponent = () => {
  const { productsForSale } = useSelector((state) => state.product);

  useEffect(() => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'letter',
    });

    var content = document.getElementById('content-22');

    doc.html(content, {
      callback: function (doc) {
        doc.viewerPreferences({ FitWindow: true });
        doc.output('dataurlnewwindow');
      },
      margin: [20, 20, 20, 20],
    });

    return () => {
      return <div></div>;
    };
  }, []);

  return (
    productsForSale.length > 0 && (
      <div className='App content-22' id='content-22'>
        <Invoice />
        <div className='separator'>
          --------------------------------------------------------------------------------------------------------------------
        </div>
        <Invoice />
      </div>
    )
  );
};
