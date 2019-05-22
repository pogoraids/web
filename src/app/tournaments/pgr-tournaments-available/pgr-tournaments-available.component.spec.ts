import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrTournamentsAvailableComponent } from './pgr-tournaments-available.component';

describe('PgrTournamentsAvailableComponent', () => {
  let component: PgrTournamentsAvailableComponent;
  let fixture: ComponentFixture<PgrTournamentsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrTournamentsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrTournamentsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
