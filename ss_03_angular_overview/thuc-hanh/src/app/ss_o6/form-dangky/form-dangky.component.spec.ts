import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDangkyComponent } from './form-dangky.component';

describe('FormDangkyComponent', () => {
  let component: FormDangkyComponent;
  let fixture: ComponentFixture<FormDangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
