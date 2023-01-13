import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThirdComponent } from './form-third.component';

describe('FormThirdComponent', () => {
  let component: FormThirdComponent;
  let fixture: ComponentFixture<FormThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
