import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviPage } from './navi.page';
import { FoodPage } from '../food/food.page';

const routes: Routes = [
  {
    path: '',
    component: NaviPage,
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



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaviPageRoutingModule {}
