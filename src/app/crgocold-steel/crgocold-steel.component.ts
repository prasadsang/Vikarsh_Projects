import { Component } from '@angular/core';
import { CrgocoldsteeService } from '../services/crbo/crgocoldstee.service';
import { crgo } from '../shared/models/crgo';


@Component({
  selector: 'app-crgocold-steel',
  templateUrl: './crgocold-steel.component.html',
  styleUrls: ['./crgocold-steel.component.css']
})
export class CrgocoldSteelComponent {
  Nanoblocks:crgo[]=[]
  showModal: boolean = false;
  isContentOneVisible: boolean = true;
  constructor(private Ns:CrgocoldsteeService ) {}
  ngOnInit(): void {
    this.Nanoblocks = this.Ns.getAll();
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
}
