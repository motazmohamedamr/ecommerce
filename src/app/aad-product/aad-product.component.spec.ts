import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadProductComponent } from './aad-product.component';

describe('AadProductComponent', () => {
  let component: AadProductComponent;
  let fixture: ComponentFixture<AadProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AadProductComponent]
    });
    fixture = TestBed.createComponent(AadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
