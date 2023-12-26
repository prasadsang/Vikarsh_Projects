import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  buttonTitle:string = "+ReadMore";
  visible:boolean = true;
  showhideUtility(){
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"+ReadMore";
  }
}
