import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Invoice} from '../templates/invoice/Invoice';
import '../../assets/css/index.scss';

export const InvoicePdfComponent = () => {
  useEffect(() => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: 'letter'
    })

    var content = document.getElementById("content-22");

    doc.html(content, {
      callback: function(doc) {
        doc.viewerPreferences({"FitWindow":true});
        doc.output('dataurlnewwindow');
        // doc.autoPrint()
      },
      margin: [20, 20, 20, 20]
    });
  }, [])
   
  return (
    <div className="App content-22" id="content-22">
      <Invoice />
      <Invoice className= "mt-3"/>
    </div>
  );
}
