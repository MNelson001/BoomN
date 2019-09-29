import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Materials
import { HisDarkMaterialsModule } from '../his-dark-materials/his-dark-materials.module';

import { NavigationDrawerComponent } from '../../components/navigation-drawer/navigation-drawer.component'

@NgModule({
  declarations: [NavigationDrawerComponent],
  imports: [
    CommonModule,
    HisDarkMaterialsModule
  ],
  exports: [
    NavigationDrawerComponent
  ]
})
export class NavigationModule { }
