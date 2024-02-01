import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';

import { IconModule } from '@coreui/icons-angular';

import { InventarioRoutingModule } from './inventario-routing.module';

// import { ToastsComponent } from './toasts/toasts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ProductComponent,
    BarcodeComponent,
    BrandComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InventarioRoutingModule,
    AlertModule,
    GridModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    FormModule,
    ModalModule,
    SharedModule,
    UtilitiesModule,
    TooltipModule,
    PopoverModule,
    ProgressModule,
    IconModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TagModule,
    RatingModule
  ],
  providers: [MessageService],

})
export class InventarioModule {
}
