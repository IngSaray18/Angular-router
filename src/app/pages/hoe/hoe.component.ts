import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-hoe',
  templateUrl: './hoe.component.html',
  styleUrls: ['./hoe.component.scss']
})
export class HoeComponent implements OnInit {
  limit = 10;
  offset = 0;
  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll(10,0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    })
  }
  loadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}


