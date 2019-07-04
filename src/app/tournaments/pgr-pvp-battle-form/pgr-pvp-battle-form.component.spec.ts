import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrPvpBattleFormComponent } from './pgr-pvp-battle-form.component';

describe('PgrPvpBattleFormComponent', () => {
  let component: PgrPvpBattleFormComponent;
  let fixture: ComponentFixture<PgrPvpBattleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrPvpBattleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrPvpBattleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
