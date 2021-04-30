import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { showPdfGenerated } from '../../actions/reports';

export const GeneratePdfFromHtml = ({ WrappedComponent, data, pdfProps, msgWhenUnmounting }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'letter',
    });

    doc.setProperties(
      Object.entries(pdfProps).map(({ key, value }) => ({
        [key]: [value],
      }))

      //title: `Nota de Entrega ${pdfProps}`,
      //customer: `${66}`,
    );

    let content = document.getElementById('content-22');
    let urlBlob;

    doc.html(content, {
      callback: function (doc) {
        doc.viewerPreferences({ FitWindow: true }, true);
        doc.autoPrint({ variant: 'non-conform' });
        const blob = doc.output('blob');
        urlBlob = URL.createObjectURL(blob);
        window.open(urlBlob);

        dispatch(showPdfGenerated(false));
      },
      margin: [40, 40, 40, 40],
    });
  }, [dispatch, pdfProps]);

  useEffect(() => {
    return (urlBlob) => {
      URL.revokeObjectURL(urlBlob);
      if (msgWhenUnmounting) {
        msgWhenUnmounting();
      }
    };
  });

  return (
    <div className='App content-22' id='content-22'>
      <WrappedComponent data={data} />
    </div>
  );
};
