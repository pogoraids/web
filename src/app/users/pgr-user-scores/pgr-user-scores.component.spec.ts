import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrUserScoresComponent } from './pgr-user-scores.component';

describe('PgrUserScoresComponent', () => {
  let component: PgrUserScoresComponent;
  let fixture: ComponentFixture<PgrUserScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrUserScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrUserScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
