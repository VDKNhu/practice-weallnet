import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weallnet';

  ngOnInit() {
    AOS.init();
  }

  scrollUp() {
    window.scrollTo(0,0);
  }
}
