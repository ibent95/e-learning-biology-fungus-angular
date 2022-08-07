import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Required } from 'src/app/services/core.service';
import { SlideShowImageResource } from "../../models/core";

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  inputs: ['imageResources', 'timeInterval'],
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Required() imageResources!: Array<SlideShowImageResource>;
  timeInterval: number = 5000;
  @ViewChild('slideShowContainerRef') slideShowContainerRef!: ElementRef;
  @ViewChildren('dotRef') dotRef!: QueryList<ElementRef>;
  slideIndex!: number;
  slideInterval!: any;

  constructor() { }

  ngOnInit(): void {
    this.slideIndex = 1;
  }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }

  private showSlides(n: number): void {

    /**
     * Main slide configurations
     */

    let slidesChildren: Array<HTMLElement> = Array.from(this.slideShowContainerRef.nativeElement.children);

    let slides: Array<HTMLElement> = slidesChildren.filter((child: any) => child.classList.contains('slide'));
    let dots: Array<ElementRef> = this.dotRef.toArray();

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    slides.forEach((slide: HTMLElement) => {
      slide.style.display = "none";
    });

    dots.forEach((dotElement: ElementRef) => {
      dotElement.nativeElement.className = dotElement.nativeElement.className.replace(" active", "");
    });

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].nativeElement.className += " active";


    /**
     * Slide interval configurations
     */

    // Clear slide interval
    if (this.slideInterval) clearInterval(this.slideInterval);

    // Set new slide interval to 4 seconds
    this.slideInterval = setInterval(() => {
      this.plusSlides(1);
    }, this.timeInterval);

  }

  // Next/previous controls
  public plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  public currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

}