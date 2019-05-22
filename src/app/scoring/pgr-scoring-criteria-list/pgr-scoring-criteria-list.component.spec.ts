import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrScoringCriteriaListComponent } from './pgr-scoring-criteria-list.component';

describe('PgrScoringCriteriaListComponent', () => {
  let component: PgrScoringCriteriaListComponent;
  let fixture: ComponentFixture<PgrScoringCriteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrScoringCriteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrScoringCriteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
