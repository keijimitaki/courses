import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NaviPage } from './navi.page';

import { NaviPageRoutingModule } from './navi-routing.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NaviPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then(m => m.FoodPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //NaviPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NaviPage]
})
export class NaviPageModule {}
