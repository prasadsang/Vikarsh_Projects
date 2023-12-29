import { Injectable } from '@angular/core';
import { crgo } from 'src/app/shared/models/crgo';

@Injectable({
  providedIn: 'root',
})
export class CrgocoldsteeService {


  mainPdf() {
    const pdfUrl2 =
      '../../../assets/BROCHURES/VIKARSH NANO_CRGO_Brochure_F_April2023 (1).pdf';
    const link = document.createElement('a');
    link.href = pdfUrl2;

    // Specify the filename for the downloaded file
    link.download = 'VIKARSH CRGO_Brochure.pdf';
    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }
}
