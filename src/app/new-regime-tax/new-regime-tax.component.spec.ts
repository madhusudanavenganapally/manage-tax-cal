import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegimeTaxComponent } from './new-regime-tax.component';

describe('NewRegimeTaxComponent', () => {
  let component: NewRegimeTaxComponent;
  let fixture: ComponentFixture<NewRegimeTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegimeTaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRegimeTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
