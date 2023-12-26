import { Component, OnInit } from '@angular/core';
import { NanoblockService } from '../services/Copper-Materical/nanoblock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  companyname='Vikarsh Nano'
  collapsed = true;

  selectedItem: string | undefined;
  constructor( private Ns: NanoblockService,){}
  ngOnInit(): void {

  }

  onSelect(item: string): void {
    this.selectedItem = item;
  }

  downloadPdfFile() {
    this.Ns.mainPdf();
  }

  isShown = true;

  logoutStatus = false;
  // isShown:boolean=false;
  collaps = true;

  doStuffOnClick() {
    this.isShown = !this.isShown;
    // if (this.isShown) {
    //   this.collaps = false;
    // }
  }
}
