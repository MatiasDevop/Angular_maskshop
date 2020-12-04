import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MasktypeComponent } from './components/masktype/masktype.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
  {path : 'masktype', component: MasktypeComponent},
  {path : 'add-to-cart', component: AddToCartComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
