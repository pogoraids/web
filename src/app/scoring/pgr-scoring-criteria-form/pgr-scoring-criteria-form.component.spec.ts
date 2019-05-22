import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrScoringCriteriaFormComponent } from './pgr-scoring-criteria-form.component';

describe('PgrScoringCriteriaFormComponent', () => {
  let component: PgrScoringCriteriaFormComponent;
  let fixture: ComponentFixture<PgrScoringCriteriaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrScoringCriteriaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrScoringCriteriaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
