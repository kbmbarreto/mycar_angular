import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";

const routes: Routes = [
  {
    path: "",
    redirectTo: "manufacturer",
    pathMatch: "full",
  },
  {
    path: "manufacturer",
    loadChildren: () => import("./manufacturer/manufacturer.module")
      .then((m) => m.ManufacturerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
