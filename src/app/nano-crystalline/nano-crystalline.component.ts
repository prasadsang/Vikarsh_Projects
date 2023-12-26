import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transformers } from '../shared/models/meritele';
import { NanoblockService } from '../services/Copper-Materical/nanoblock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nano-crystalline',
  templateUrl: './nano-crystalline.component.html',
  styleUrls: ['./nano-crystalline.component.css'],
})
export class NanoCrystallineComponent implements OnInit {
  Nanoblocks: Transformers[] = [];
  hideNavbar = false;
  tabContent: any;
  downloadCount: number = 0;
  constructor(private Ns: NanoblockService) {}
  ngOnInit(): void {}
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  hamdownloadPdfFile() {
    this.Ns.hmacore();
  }
  // dowload code
  downloadPdfFile() {
    this.Ns.downloadPdf();
  }

  WeldingdownloadPdfFile() {
    this.Ns.Weldingrectifier();
  }

  minicoredownloadPdFile() {
    this.Ns.MinicorePdf();
  }

  cutdownloadPdfFile() {
    this.Ns.nanocut();
  }
  downloadFile() {
    // Implement your download logic here
    this.downloadCount++;
  }
}
