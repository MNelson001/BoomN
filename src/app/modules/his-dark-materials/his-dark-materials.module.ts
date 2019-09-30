import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material components
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class HisDarkMaterialsModule { }
