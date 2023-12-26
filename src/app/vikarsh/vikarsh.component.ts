import { animate, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit, ViewChild, ElementRef ,} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-vikarsh',
  templateUrl: './vikarsh.component.html',
  styleUrls: ['./vikarsh.component.css'],
  animations: [
    trigger('rowAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class VikarshComponent {
  cards: any[] = []; // Replace this with your actual data structure






  constructor() {
    // Populate the 'cards' array with data for each card
    for (let i = 1; i <= 4; i++) {
      this.cards.push({ id: i });
    }
  }
  selectedUser: any;

  selectUser(user: any) {
    this.selectedUser = user;
  }
  bx() {
    alert('Welcome');
  }

  carousel() {
    interval: 2000;
  }
  title() {
    interval: 2000;
  }
  @ViewChild('swiperContainer') swiperContainer?: ElementRef;

  ngAfterViewInit(): void {
    if (this.swiperContainer) {
      new Swiper(this.swiperContainer.nativeElement, {
        // Swiper configuration options
        slidesPerView: 1,
        spaceBetween: 10,
        // Add more options as needed
      });
    }
  }
}

