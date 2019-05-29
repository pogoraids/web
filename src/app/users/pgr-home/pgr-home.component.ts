import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgr-home',
  templateUrl: './pgr-home.component.html',
  styleUrls: ['./pgr-home.component.css']
})
export class PgrHomeComponent implements OnInit {
  slides = [{ image: `https://picsum.photos/900/200?random&t=${Math.random()}` }, { image: `https://picsum.photos/900/200?random&t=${Math.random()}` }, { image: `https://picsum.photos/900/200?random&t=${Math.random()}`, title: 'Title 1', body: 'Lorem ipsum sit dolor amet' }];

  constructor() { }

  ngOnInit() {
  }

}
