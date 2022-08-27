import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FoodPage } from './food.page';

import { FoodPageRoutingModule } from './food-routing.module';

const routes: Routes = [
  {
    path: 'food',
    component: FoodPage,
    loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule),
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodPageRoutingModule
  ],
  declarations: [FoodPage]
})
export class FoodPageModule {}
