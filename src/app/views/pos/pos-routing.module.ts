import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './pos/pos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pos'
      },
      {
        path: 'pos',
        component: PosComponent,
        data: {
          title: 'Plataforma POS'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule {
}
