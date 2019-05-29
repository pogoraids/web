import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pgr-carousel',
  templateUrl: './pgr-carousel.component.html',
  styleUrls: ['./pgr-carousel.component.css']
})
export class PgrCarouselComponent implements OnInit {
  @Input() slides;

  constructor() { }

  ngOnInit() {
  }

}
