import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


interface caruselImages {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
})
export class CaruselComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  @Input() images: caruselImages[] = [];
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideTimer = 4000;

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    if(this.autoSlide) {
      this.rotateImages();
    }
  }

  rotateImages(): void {
    setInterval(() => {
      this.next();
    }, this.slideTimer)
  }

  

  previous(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
      this.slideTimer;
    } else {
      this.selectedIndex--;
    }
  }
  next(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
      this.slideTimer;
    } else {
      this.selectedIndex++;
    }
  }
}
