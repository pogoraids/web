import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgrHomeComponent } from './pgr-home/pgr-home.component';
import { PgrLoginComponent } from './pgr-login/pgr-login.component';
import { PgrUserSettingsComponent } from './pgr-user-settings/pgr-user-settings.component';
import { PgrUserScoresComponent } from './pgr-user-scores/pgr-user-scores.component';
import { PgrInboxComponent } from './pgr-inbox/pgr-inbox.component';
import { SharedComponentsModule } from '../sharedComponents/sharedComponents.module';

@NgModule({
  declarations: [PgrHomeComponent, PgrLoginComponent, PgrUserSettingsComponent, PgrUserScoresComponent, PgrInboxComponent],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class UsersModule { }
