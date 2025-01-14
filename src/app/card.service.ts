import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService  {

  constructor() { }

  myProducts :any[] = []



  addToCart(p:any){

    let i = this.myProducts.indexOf(p)

    if(i === -1)
    this.myProducts.push(p)
  else
  alert('already exist')

 
  }


  removePrduct(p:any){
    this.myProducts.forEach((x, index) => {
      if(x.productId == p.productId)
      {
        this.myProducts.splice(index , 1)
      }
    })
  }


  removeAll(){
    this.myProducts = []
  }
}