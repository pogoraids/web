import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrScoringCriteriaListComponent } from './pgr-scoring-criteria-list/pgr-scoring-criteria-list.component';
import { PgrScoringCriteriaFormComponent } from './pgr-scoring-criteria-form/pgr-scoring-criteria-form.component';

@NgModule({
  declarations: [PgrScoringCriteriaListComponent, PgrScoringCriteriaFormComponent],
  imports: [
    CommonModule
  ]
})
export class ScoringModule { }
