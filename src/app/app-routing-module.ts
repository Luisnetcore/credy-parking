
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  {path:'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'', component: MenuComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }