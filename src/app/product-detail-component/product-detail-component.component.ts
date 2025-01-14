import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CardService } from '../card.service';

@Component({
  selector   : 'app-product-detail-component',
  templateUrl: './product-detail-component.component.html',
  styleUrls  : ['./product-detail-component.component.css']
})
export class ProductDetailComponentComponent {

  productId: any;
  myproduct: any;

  constructor(
    private route   : ActivatedRoute,   //for reading data 
    private service : ProductService,
    private router  : Router,
    private cartServ: CardService
    ){}

    ngOnInit() {
            // Get the 'id' parameter from the route
      this.productId = this.route.snapshot.paramMap.get('id');
  this.service.myarray.forEach(p=>{
    if(p.productId ==this.productId){
 this.myproduct = p
    }
  })
     console.log('productId:',this.productId);
  
     
    
  
    }

    addToCart(p:any){
      if (localStorage.getItem('userSession')==null){
        this.router.navigate(['login']);
      }else{
        confirm('do you want to add this item')
        this.cartServ.addToCart(p)
      }
    }
  }
