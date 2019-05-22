import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrLeftMenuComponent } from './pgr-left-menu.component';

describe('PgrLeftMenuComponent', () => {
  let component: PgrLeftMenuComponent;
  let fixture: ComponentFixture<PgrLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
