import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrCarouselComponent } from './pgr-carousel.component';

describe('PgrCarouselComponent', () => {
  let component: PgrCarouselComponent;
  let fixture: ComponentFixture<PgrCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
