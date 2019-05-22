import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrInboxComponent } from './pgr-inbox.component';

describe('PgrInboxComponent', () => {
  let component: PgrInboxComponent;
  let fixture: ComponentFixture<PgrInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
