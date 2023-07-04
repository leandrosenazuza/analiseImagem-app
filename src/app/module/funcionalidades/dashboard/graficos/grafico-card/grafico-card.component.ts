import { Component } from '@angular/core';
import { productSales } from '../../data/data';

@Component({
  selector: 'app-grafico-card',
  templateUrl: './grafico-card.component.html',
  styleUrls: ['./grafico-card.component.scss']
})
export class GraficoCardComponent {

  productSales!: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#deaff0';

  constructor() {
    Object.assign(this, { productSales });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
