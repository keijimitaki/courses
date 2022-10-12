import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navi',
    loadChildren: () => import('./navi/navi.module').then( m => m.NaviPageModule)
  },
  {
    path: 'homedetail',
    loadChildren: () => import('./home/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./food/food.module').then( m => m.FoodPageModule)
  },    
  {
    path: '',
    redirectTo: 'navi',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
