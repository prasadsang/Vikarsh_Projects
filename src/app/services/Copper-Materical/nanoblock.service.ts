import { Injectable } from '@angular/core';

import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class NanoblockService {
  constructor() {}

  downloadPdf() {
    const pdfUrl1 =
      '../../../assets/BROCHURES/Vikano super 300 ribbon brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl1;

    // Specify the filename for the downloaded file
    link.download = 'ribbon-brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  mainPdf() {
    const pdfUrl2 =
      '../../../assets/BROCHURES/VIKARSH NANO_CRGO_Brochure_F_April2023 (1).pdf';
    const link = document.createElement('a');
    link.href = pdfUrl2;

    // Specify the filename for the downloaded file
    link.download = 'VIKARSH NANO_Brochure.pdf';
    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  MinicorePdf() {
    const pdfUrl3 = '../../../assets/BROCHURES/Mini core brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl3;

    // Specify the filename for the downloaded file
    link.download = 'Mini core brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }




  Weldingrectifier() {
    const pdfUrl4 = '../../../assets/BROCHURES/Welding rectifier cores & transformer brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl4;

    // Specify the filename for the downloaded file
    link.download = 'Welding rectifier brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  nanocut() {
    const pdfUrl5 = '../../../assets/BROCHURES/cut cores & Blocks brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl5;

    // Specify the filename for the downloaded file
    link.download = 'cut cores & Blocks brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  hmacore() {
    const pdfUrl5 = '../../../assets/BROCHURES/HMA core brochure.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl5;

    // Specify the filename for the downloaded file
    link.download = 'HMA core brochure.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }

  private getDocumentDefinition() {
    // You can customize the content here using jsPDF methods
  }
}
