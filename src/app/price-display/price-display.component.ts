import {
  Component,
  Input
} from '@angular/core';

/**
 *  @PriceDisplay: A component to show the price of a
 *                  Product
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'price-display',
  template: `
    <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;
}
