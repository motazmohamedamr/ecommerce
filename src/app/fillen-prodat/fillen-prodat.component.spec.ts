import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillenProdatComponent } from './fillen-prodat.component';

describe('FillenProdatComponent', () => {
  let component: FillenProdatComponent;
  let fixture: ComponentFixture<FillenProdatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillenProdatComponent]
    });
    fixture = TestBed.createComponent(FillenProdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
