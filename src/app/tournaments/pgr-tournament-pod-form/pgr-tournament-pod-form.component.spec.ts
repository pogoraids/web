import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrTournamentPodFormComponent } from './pgr-tournament-pod-form.component';

describe('PgrTournamentPodFormComponent', () => {
  let component: PgrTournamentPodFormComponent;
  let fixture: ComponentFixture<PgrTournamentPodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrTournamentPodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrTournamentPodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
