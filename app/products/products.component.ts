import { Component } from '@angular/core';
import { CartService } from '../CartService/cart-service.service';
import { OrderDetailsService } from '../services/order-details.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private service: OrderDetailsService, private cartService : CartService){}
  bagData:any;
  bagData1:any;
  ngOnInit(): void {
    this.bagData = this.service.bagDetails;
    this.bagData1=this.service.bagDetails1;
    
  }
addtoCart(bg : any){
this.cartService.addToCart(bg);
}
}
