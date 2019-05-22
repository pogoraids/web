import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrTournamentFormComponent } from './pgr-tournament-form.component';

describe('PgrTournamentFormComponent', () => {
  let component: PgrTournamentFormComponent;
  let fixture: ComponentFixture<PgrTournamentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrTournamentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrTournamentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
