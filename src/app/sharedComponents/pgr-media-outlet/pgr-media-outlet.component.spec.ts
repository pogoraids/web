import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrMediaOutletComponent } from './pgr-media-outlet.component';

describe('PgrMediaOutletComponent', () => {
  let component: PgrMediaOutletComponent;
  let fixture: ComponentFixture<PgrMediaOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrMediaOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrMediaOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
