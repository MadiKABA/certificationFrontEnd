import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDepartementComponent } from './formulaire-departement.component';

describe('FormulaireDepartementComponent', () => {
  let component: FormulaireDepartementComponent;
  let fixture: ComponentFixture<FormulaireDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
