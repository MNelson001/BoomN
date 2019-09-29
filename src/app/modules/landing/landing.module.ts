import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HisDarkMaterialsModule } from '../his-dark-materials/his-dark-materials.module';

import { LandingComponent } from '../../components/landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    HisDarkMaterialsModule
  ]
})
export class LandingModule { }
