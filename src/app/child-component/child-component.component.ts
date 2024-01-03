import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() isModalActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isModalActive']) {
      // Do something when isModalActive changes
      if (this.isModalActive) {
        console.log('Modal is active in the child component');
        // Add your modal activation logic here
      }
    }
  }
}
