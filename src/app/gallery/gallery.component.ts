import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  isZoomed = false;

  get zoomedImageStyle() {
    return {
      transform: this.isZoomed ? 'scale(1.5)' : 'none'
    };
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
