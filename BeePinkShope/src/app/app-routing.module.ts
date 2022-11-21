import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),

  },
  {
      path: 'feed',
      loadChildren: () =>
      import('./pages/tab1/tab1.module').then(
        (m) => m.Tab1PageModule
      ),
  },
  {
      path: 'carrito',
      loadChildren: () =>
      import('./pages/tab2/tab2.module').then(
        (m) => m.Tab2PageModule
      ),
  },
  {
      path: 'favoritos',
      loadChildren: () =>
      import('./pages/tab3/tab3.module').then(
        (m) => m.Tab3PageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
