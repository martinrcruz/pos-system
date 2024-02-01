import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { BrandComponent } from './brand/brand.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inventario'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: 'Productos'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Categorias'
        }
      },
      {
        path: 'sub-category',
        component: SubCategoryComponent,
        data: {
          title: 'Sub Categorias'
        }
      },
      {
        path: 'brand',
        component: BrandComponent,
        data: {
          title: 'Marcas'
        }
      },
      {
        path: 'barcode',
        component: BarcodeComponent,
        data: {
          title: 'Codigo de Barras'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule {
}
