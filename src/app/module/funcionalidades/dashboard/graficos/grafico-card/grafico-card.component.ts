import { Component } from '@angular/core';
import { productSales, cor } from '../../data/data';

@Component({
  selector: 'app-grafico-card',
  templateUrl: './grafico-card.component.html',
  styleUrls: ['./grafico-card.component.scss']
})
export class GraficoCardComponent {

  productSales: any[] = [];
  productSalesMulti: any[] = [];

  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor() { Object.assign(this, { productSales, cor }) }

  ngOnInit(): void {
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
