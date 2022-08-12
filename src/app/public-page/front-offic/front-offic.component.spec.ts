import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficComponent } from './front-offic.component';

describe('FrontOfficComponent', () => {
  let component: FrontOfficComponent;
  let fixture: ComponentFixture<FrontOfficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontOfficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontOfficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
