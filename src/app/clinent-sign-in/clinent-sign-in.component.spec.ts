import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinentSignInComponent } from './clinent-sign-in.component';

describe('ClinentSignInComponent', () => {
  let component: ClinentSignInComponent;
  let fixture: ComponentFixture<ClinentSignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinentSignInComponent]
    });
    fixture = TestBed.createComponent(ClinentSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
