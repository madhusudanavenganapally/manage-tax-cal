import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-visualization',
  templateUrl: './tax-visualization.component.html',
  styleUrls: ['./tax-visualization.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TaxVisualizationComponent {
  taxBrackets = [
    { range: '0 - 4,00,000', color: '#E8F5E9', textColor: '#000' },
    { range: '4,00,001 - 8,00,000', color: '#C8E6C9', textColor: '#000' },
    { range: '8,00,001 - 12,00,000', color: '#A5D6A7', textColor: '#000' },
    { range: '12,00,001 - 16,00,000', color: '#81C784', textColor: '#000' },
    { range: '16,00,001 - 20,00,000', color: '#66BB6A', textColor: '#000' },
    { range: '20,00,001 - 24,00,000', color: '#4CAF50', textColor: '#000' },
    { range: 'Above 24,00,000', color: '#388E3C', textColor: '#000' }
  ];

  taxLabels = ['0%', '5%', '10%', '15%', '20%', '25%', '30%'];
}