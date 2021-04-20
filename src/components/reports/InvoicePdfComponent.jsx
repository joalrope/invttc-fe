import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Invoice } from '../templates/invoice/Invoice';
import { startShowInvoicePdf } from '../../actions/reports';

export const InvoicePdfComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
        //history.goBack();
        dispatch(startShowInvoicePdf(false));
      },
      margin: [20, 20, 20, 20],
    });

    return () => {
      return <div></div>;
    };
  }, [dispatch, history]);

  // if (productsForSale.length === 0) {
  //   history.goBack();
  // }

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
