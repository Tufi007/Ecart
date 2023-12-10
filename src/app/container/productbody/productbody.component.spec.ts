import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbodyComponent } from './productbody.component';

describe('ProductbodyComponent', () => {
  let component: ProductbodyComponent;
  let fixture: ComponentFixture<ProductbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
