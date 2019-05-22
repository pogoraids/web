import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrTournamentCardComponent } from './pgr-tournament-card.component';

describe('PgrTournamentCardComponent', () => {
  let component: PgrTournamentCardComponent;
  let fixture: ComponentFixture<PgrTournamentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrTournamentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrTournamentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
