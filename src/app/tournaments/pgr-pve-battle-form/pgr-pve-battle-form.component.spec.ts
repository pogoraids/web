import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrPveBattleFormComponent } from './pgr-pve-battle-form.component';

describe('PgrPveBattleFormComponent', () => {
  let component: PgrPveBattleFormComponent;
  let fixture: ComponentFixture<PgrPveBattleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrPveBattleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrPveBattleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
