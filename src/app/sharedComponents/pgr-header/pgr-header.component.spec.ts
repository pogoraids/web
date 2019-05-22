import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrHeaderComponent } from './pgr-header.component';

describe('PgrHeaderComponent', () => {
  let component: PgrHeaderComponent;
  let fixture: ComponentFixture<PgrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
