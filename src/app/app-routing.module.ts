import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from "./app.component";
import {FormBuilder, FormGroup, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {CakeSystemComponent} from "./cake-system/cake-system.component";

const routes: Routes = [
  {
    path: '', component:CakeSystemComponent, pathMatch: "full"
  },
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

