import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ve-weallnet',
  templateUrl: './ve-weallnet.component.html',
  styleUrls: ['./ve-weallnet.component.scss']
})
export class VeWeallnetComponent implements OnInit { 
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.carousel();
    }, 2000);
  }

  carousel() {
    let slides = document.getElementsByClassName("wanster-squad");

    for(let i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'opacity: 0');
    }

    slides[this.index].setAttribute('style', 'opacity: 1');
    this.index < (slides.length - 1) ? this.index++ : this.index = 0;
  }
}
