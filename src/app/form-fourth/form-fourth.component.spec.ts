import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFourthComponent } from './form-fourth.component';

describe('FormFourthComponent', () => {
  let component: FormFourthComponent;
  let fixture: ComponentFixture<FormFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
