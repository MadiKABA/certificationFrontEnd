import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireProfileComponent } from './formulaire-profile.component';

describe('FormulaireProfileComponent', () => {
  let component: FormulaireProfileComponent;
  let fixture: ComponentFixture<FormulaireProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
