import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-managment',
  templateUrl: './product-managment.component.html',
  styleUrls: ['./product-managment.component.css']
})
export class ProductManagmentComponent {
  constructor(private service : ProductService){}
  productArray : any
  
  ngOnInit(): void {
    this.service.getProducts().subscribe((p:any)=>{this.productArray = p.data})
    
    this.service.getProducts().subscribe(data=>{this.productArray = data})
    
  }
  
  
  
  }
  