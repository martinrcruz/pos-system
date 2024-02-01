import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {

  visible = [true, true];
  dismissible = true;

  selectedProducts: any = [];
  products: any = []

  product = {
    rating: ''
  }

  //LABELS
  Delete:any

  constructor() { }

  ngOnInit(): void {
  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }

  openNew(){

  }

  deleteSelectedProducts(){

  }

  getSeverity(data: any) {

  }

  editProduct(data: any){

  }

  deleteProduct(data: any){

  }

}
