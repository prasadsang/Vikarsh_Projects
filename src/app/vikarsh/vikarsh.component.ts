import { trigger, transition, style, animate } from '@angular/animations';
import { Component, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-vikarsh',
  templateUrl: './vikarsh.component.html',
  styleUrls: ['./vikarsh.component.css'],
   animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('textAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  
  ]
})
export class VikarshComponent {
  cards: any[] = []; // Replace this with your actual data structure



  // 

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

  slides: Slide[] = [
    
    // Add more slides as needed
  ];

  currentSlideIndex: number = 0;

  ngOnInit() {
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}

interface Slide {
  imageUrl: string;
  text: string;
}

