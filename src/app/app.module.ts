import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from './sharedComponents/sharedComponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([], {useHash: false}),
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
