import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;

  constructor(private ProductService: ProductService) {
    this.products$ = this.ProductService.getAll();
  }

  ngOnInit() {
    
  }

}
