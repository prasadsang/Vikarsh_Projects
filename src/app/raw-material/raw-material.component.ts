import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
 // Adjust the path accordingly
@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('right', style({
        transform: 'translateX(100%)'
      })),
      state('left', style({
        transform: 'translateX(0)'
      })),
      transition('right => left', animate('500ms ease-out')),
      transition('left => right', animate('500ms ease-in'))
    ])
  ]
})
export class RAWMATERIALComponent {
  animationState = 'right';

  // Assuming you have a list of products
  products = [
    { name: 'Product 1', description: 'Description 1' },
    { name: 'Product 2', description: 'Description 2' },
    // Add more products as needed
  ];

  moveCard(direction: 'left' | 'right') {
    this.animationState = direction === 'right' ? 'left' : 'right';
  }
}
