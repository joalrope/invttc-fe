import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { showPdfGenerated } from '../../actions/reports';

export const GeneratePdfFromHtml = ({ WrappedComponent, data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.html2canvas = html2canvas;
    var doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'letter',
    });

    var content = document.getElementById('content-22');

    doc.html(content, {
      callback: function (doc) {
        doc.viewerPreferences({ FitWindow: true });
        doc.output('dataurlnewwindow');
        dispatch(showPdfGenerated(false));
      },
      margin: [40, 40, 40, 40],
    });
  }, [dispatch]);

  return (
    <div className='App content-22' id='content-22'>
      <WrappedComponent data={data} />
    </div>
  );
};
