import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from './overlay.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: OverlayService, useClass: OverlayService}
  ]
})
export class ServicesModule { }
