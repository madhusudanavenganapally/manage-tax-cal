import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaxLength10Directive } from '../max-length10-directive.directive';
import { TaxVisualizationComponent } from '../tax-visualization/tax-visualization.component';

@Component({
  selector: 'app-new-regime-tax',
  templateUrl: './new-regime-tax.component.html',
  styleUrls: ['./new-regime-tax.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaxLength10Directive,TaxVisualizationComponent],
})
export class NewRegimeTaxComponent {
  taxForm = new FormGroup({
    annualIncome: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  calculatedTax: number | null = null;
  standardDeduction = 75000;
  taxBreakdown = '';
  taxableIncome = 0;
  takeHomeAmount: number | null = null;
  formattedAnnualIncome: string | null = null;
  formattedStandardDeduction: string | null = null;
  formattedTaxableIncome: string | null = null;
  formattedCalculatedTax: string | null = null;
  formattedTakeHomeAmount: string | null = null;

  get annualIncomeControl() {
    return this.taxForm.get('annualIncome');
  }

  calculateTax() {
    if (this.taxForm.invalid) {
      console.log('Form is invalid. Please check the input.');
      this.taxBreakdown = "Invalid Input. Please check the Annual Income"; 
      return;
    }

    const annualIncome = this.annualIncomeControl?.value ?? 0;

    if (annualIncome <= 1275000) {
      this.calculatedTax = 0;
      this.taxableIncome = annualIncome;
      this.taxBreakdown = 'No tax for income up to 12 Lakhs 75 Thousand';
      this.takeHomeAmount = annualIncome;
    } else {
      this.taxableIncome = Math.max(0, annualIncome - this.standardDeduction);
      this.calculatedTax = this.calculateIncomeTax(this.taxableIncome);
      this.takeHomeAmount = annualIncome - this.calculatedTax;
    }

    // Format values for display
    this.formattedAnnualIncome = this.formatCurrency(annualIncome);
    this.formattedStandardDeduction = this.formatCurrency(this.standardDeduction);
    this.formattedTaxableIncome = this.formatCurrency(this.taxableIncome);
    this.formattedCalculatedTax = this.formatCurrency(this.calculatedTax);
    this.formattedTakeHomeAmount = this.formatCurrency(this.takeHomeAmount);
  }

  calculateIncomeTax(income: number): number {
    const taxBrackets = [
      { limit: 400000, rate: 0 },
      { limit: 800000, rate: 0.05 },
      { limit: 1200000, rate: 0.10 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.20 },
      { limit: 2400000, rate: 0.25 },
      { limit: Infinity, rate: 0.30 },
    ];

    let tax = 0;
    let previousLimit = 0;
    this.taxBreakdown = '';

    for (const bracket of taxBrackets) {
      if (income > bracket.limit) {
        tax += (bracket.limit - previousLimit) * bracket.rate;
        this.taxBreakdown += `${previousLimit + 1} - ${bracket.limit}: ${bracket.rate * 100}% = ${(bracket.limit - previousLimit) * bracket.rate}\n`;
        previousLimit = bracket.limit;
      } else {
        tax += (income - previousLimit) * bracket.rate;
        this.taxBreakdown += `${previousLimit + 1} - ${income}: ${bracket.rate * 100}% = ${(income - previousLimit) * bracket.rate}\n`;
        break;
      }
    }

    return tax;
  }

  formatCurrency(value: number | null): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value ?? 0);
  }
}