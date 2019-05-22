import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrOverlayComponent } from './pgr-overlay.component';

describe('PgrOverlayComponent', () => {
  let component: PgrOverlayComponent;
  let fixture: ComponentFixture<PgrOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
