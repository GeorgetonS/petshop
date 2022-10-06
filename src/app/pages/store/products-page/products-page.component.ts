import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent   {
 // products$: Observable<Product[]> = null;
  public products$: Observable<Product[]>;

  constructor(private service: DataService) {
    this.products$ = this.service.getProducts();
   }
  



}
