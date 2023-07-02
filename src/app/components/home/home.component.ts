import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.carousel();
    }, 2000);
  }

  carousel() {
    let slides = document.getElementsByClassName("p-slider-item");

    for(let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display:none');
    }

    slides[this.index].setAttribute('style', 'display: block');
    this.index < (slides.length - 1) ? this.index++ : this.index = 0;
  }
}
