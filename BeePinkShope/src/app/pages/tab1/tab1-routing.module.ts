import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Tab2Page} from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page'

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'carrito',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
