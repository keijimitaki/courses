import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TopPage } from './top.page';

import { TopPageRoutingModule } from './top-routing.module';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     component: TopPage,
//     children: [
//       {
//         path: 'top',
//         loadChildren: () => import('../top/top.module').then(m => m.TopPageModule)
//       },
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/top',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopPageRoutingModule
    //RouterModule.forChild(routes)   
  ],
  declarations: [TopPage]
})
export class TopPageModule {}
