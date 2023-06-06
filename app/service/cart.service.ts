import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any=[]
  public productList = new BehaviorSubject<any>([]) /*Behavioursubject is where anyone can subscribe whatever data is emitted*/

  constructor() { }
  getProducts(){
   return this.productList.asObservable();      /* using getter and setter */
}

setProduct(product : any){
  this.cartItemList.push(...product);
  this.productList.next(product);  /* pushing the products inside cart */
}
addtoCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList); /*people who subscribe to the products it passs to cart */
  this.getTotalPrice();
  console.log(this.cartItemList);
}
getTotalPrice(){
  let grandTotal=0; 
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  })
}
removeCartItem(product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1);
    }
  })
}
}
