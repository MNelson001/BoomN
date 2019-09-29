import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Materials
import { HisDarkMaterialsModule } from '../his-dark-materials/his-dark-materials.module';

import { NavigationComponent } from '../../components/navigation-drawer/navigation.component'

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    HisDarkMaterialsModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
