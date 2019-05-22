import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrLoginComponent } from './pgr-login.component';

describe('PgrLoginComponent', () => {
  let component: PgrLoginComponent;
  let fixture: ComponentFixture<PgrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
