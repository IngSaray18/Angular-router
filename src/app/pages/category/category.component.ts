import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  limit = 10;
  offset = 0;
  products: Product[] = [];
categroyId: string | null=null;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params =>{
       this.categroyId = params.get('id')

       if(this.categroyId != null){
         this.productsService.getByCategory(this.categroyId,this.limit,this.offset).subscribe(data =>{
          this.products = data;
         })
       }

        })


  }

}
