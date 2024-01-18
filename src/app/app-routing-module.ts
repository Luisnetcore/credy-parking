
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'registro-vehiculo', loadChildren: () => import('./modules/parking/parking.module').then(m => m.ParkingModule)}
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