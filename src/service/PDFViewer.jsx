import React from 'react';
import Resume from '../assets/resume.pdf'

const PDFViewer = () => {
  const handlePrint = () => {
    const iframe = document.getElementById('pdfFrame');
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  };

  return (
    <div>
      <iframe
        id="pdfFrame"
        src={Resume}
        width="800px"
        height="500px"
        style={{ border: 'none' }}
      ></iframe>
      <button className='hover:bg-blue-800 font-semibold bg-blue-600 w-30 h-10 mt-2 rounded cursor-pointer' onClick={handlePrint}>Print PDF</button>
    </div>
  );
};

export default PDFViewer;
