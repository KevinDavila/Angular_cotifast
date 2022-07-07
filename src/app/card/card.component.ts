import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from './productservice';
import { Product } from './product';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  products:  Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey: string;

  constructor(private productService: ProductService, private primeNGConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
    this.primeNGConfig.ripple = true;
  }
  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
