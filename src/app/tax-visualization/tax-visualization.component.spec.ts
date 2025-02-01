import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxVisualizationComponent } from './tax-visualization.component';

describe('TaxVisualizationComponent', () => {
  let component: TaxVisualizationComponent;
  let fixture: ComponentFixture<TaxVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
