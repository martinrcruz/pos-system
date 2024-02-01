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
  ToastModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { PosRoutingModule } from './pos-routing.module';

// import { ToastsComponent } from './toasts/toasts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PosComponent } from './pos/pos.component';

@NgModule({
  declarations: [
    PosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PosRoutingModule,
    AlertModule,
    GridModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    FormModule,
    ModalModule,
    ToastModule,
    SharedModule,
    UtilitiesModule,
    TooltipModule,
    PopoverModule,
    ProgressModule,
    IconModule
  ],
})
export class PosModule {
}
