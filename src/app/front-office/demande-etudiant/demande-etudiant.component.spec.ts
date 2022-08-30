import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEtudiantComponent } from './demande-etudiant.component';

describe('DemandeEtudiantComponent', () => {
  let component: DemandeEtudiantComponent;
  let fixture: ComponentFixture<DemandeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
