import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPage } from './food.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPage,
    // children: [
    //   {
    //     path: 'food',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule),
    //       }
    //     ]
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   }
    // ] 
  },
  // {
  //   path: 'food',
  //   component: FoodPage,
  //   loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule),
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPageRoutingModule {}
