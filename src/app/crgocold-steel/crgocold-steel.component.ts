import { Component, TemplateRef } from '@angular/core';
import { CrgocoldsteeService } from '../services/crbo/crgocoldstee.service';
import { crgo } from '../shared/models/crgo';
import { ModalServicesService } from '../services/modal/modal-services.service';


@Component({
  selector: 'app-crgocold-steel',
  templateUrl: './crgocold-steel.component.html',
  styleUrls: ['./crgocold-steel.component.css']
})
export class CrgocoldSteelComponent {
  Nanoblocks:crgo[]=[]
  showModal: boolean = false;
  isContentOneVisible: boolean = true;
  constructor(private Ns:CrgocoldsteeService,private formCommunicationService:  ModalServicesService) {}
  ngOnInit(): void {

  }

  downloadPdfFile() {
    this.Ns.mainPdf();
  }
  // openModal() {
  //   ('#myModal').modal('show');
  // }

  // // Function to close the modal
  // closeModal() {
  //   $('#myModal').modal('hide');
  // }

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
 
  isModalActive = false;

  openModal() {
    // this.isModalActive = true;
    alert:'Welcome TO Modal '
  }
  openForm() {
    this.formCommunicationService['openForm']();
  }
}
