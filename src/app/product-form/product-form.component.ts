import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { 
    
    let name = this.route.snapshot.paramMap.get('name');
  }

  save(product) {
    // console.log(product);
    if(product.name != "" &&
      product.description != "" &&
      product.price >= 0 &&
      product.rating >= 0 &&
      product.rating <= 10 &&
      product.seller != "" &&
      product.warranty != ""
      ) {
      this.productService.create(product);
      this.router.navigate(['/products']);
    }
  }

  ngOnInit() {
  }

}
