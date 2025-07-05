import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css'],
})
export class UpdateComponentComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined |string;

  constructor(private route: ActivatedRoute, private product: ProductService,private router:Router) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }

  submit(data: product) {
if(this.productData){
  data.id=this.productData.id;
}
    console.warn(data);
    this.product.updateProduct(data).subscribe((result)=>
    {
      if(result){
this.productMessage="Product updated !"
// this.router.navigate(['seller-home-component'])
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    this.router.navigate(['seller-home'])
    }, 500)

  }
}
