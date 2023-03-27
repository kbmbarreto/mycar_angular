import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { ManufacturerFormComponent } from './components/manufacturer-form/manufacturer-form.component';
import { ManufacturerListComponent } from './components/manufacturer-list/manufacturer-list.component';
import {ManufacturerRoutingModule} from "./manufacturer-routing.module";

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    ManufacturerFormComponent,
    ManufacturerListComponent
  ],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
  ]
})
export class ManufacturerModule { }
