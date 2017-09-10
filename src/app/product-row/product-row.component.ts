import {
  Component,
  Input,
  OnInit,
  HostBinding
} from '@angular/core';
import { Product } from '../product.model';

/**
 *  @ProductRow:  A component for the view of a single Product
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
