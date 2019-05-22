import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrReviewerQueueComponent } from './pgr-reviewer-queue.component';

describe('PgrReviewerQueueComponent', () => {
  let component: PgrReviewerQueueComponent;
  let fixture: ComponentFixture<PgrReviewerQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrReviewerQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrReviewerQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
