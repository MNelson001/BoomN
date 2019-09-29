import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material components
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class HisDarkMaterialsModule { }
