import { Product } from './../product.model';
import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

/**
 *  @ProductsList: A component for rendering all ProductRows and
 *  storing the currently selected Product
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  /**
   *  @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /**
   *  @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   *  @property currentProduct - local state containing
   *            the currently selected 'Product'
   */
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
