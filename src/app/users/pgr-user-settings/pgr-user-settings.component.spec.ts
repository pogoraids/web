import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrUserSettingsComponent } from './pgr-user-settings.component';

describe('PgrUserSettingsComponent', () => {
  let component: PgrUserSettingsComponent;
  let fixture: ComponentFixture<PgrUserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrUserSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
