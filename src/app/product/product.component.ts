import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
constructor(private service:ProductService ,private router:Router, private cartServ:CardService ){}
productArray:any

ngOnInit(){
  this.productArray=this.service.myarray
}

getProduct()
{
this.service.getProducts().subscribe((p:any)=>{this.productArray=this.productArray.data})
this.productArray=this.service.myarray
}

AddToCart(){

}

showProduct(prod:any){
console.log('showProduct');
this.router.navigate([`prDetail/ ${prod.productId}`]);

}
// cart service

addToCart(p : any){

  if(localStorage.getItem('userSession') === null){
    this.router.navigate(['login']);
  }else{
   if( confirm('do u want to add this item') ){ 
    this.cartServ.addToCart(p)
   }
    
  }}

  // parray=[
  //   {
  //     pid:1,
  //     pname:'product1',
  //     mfg:'10-9-2024',
  //     price:5000

  //   },

  //   {
  //     pid:2,
  //     pname:'product2',
  //     mfg:'10-9-2024',
  //     price:5000

  //   },

  //   {
  //     pid:3,
  //     pname:'product3',
  //     mfg:'10-9-2024',
  //     price:5000

  //   },

  //   {
  //     pid:4,
  //     pname:'product4',
  //     mfg:'10-9-2024',
  //     price:5000

  //   }

  // ]

}
