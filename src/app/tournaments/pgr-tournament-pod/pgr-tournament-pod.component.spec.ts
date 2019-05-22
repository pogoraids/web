import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrTournamentPodComponent } from './pgr-tournament-pod.component';

describe('PgrTournamentPodComponent', () => {
  let component: PgrTournamentPodComponent;
  let fixture: ComponentFixture<PgrTournamentPodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrTournamentPodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrTournamentPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
