import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrHomeComponent } from './pgr-home.component';

describe('PgrHomeComponent', () => {
  let component: PgrHomeComponent;
  let fixture: ComponentFixture<PgrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
