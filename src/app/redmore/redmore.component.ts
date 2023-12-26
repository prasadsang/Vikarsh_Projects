import { Component } from '@angular/core';

@Component({
  selector: 'app-redmore',
  templateUrl: './redmore.component.html',
  styleUrls: ['./redmore.component.css']
})
export class RedmoreComponent {
  showShortDesciption = true
  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption
 }
}
