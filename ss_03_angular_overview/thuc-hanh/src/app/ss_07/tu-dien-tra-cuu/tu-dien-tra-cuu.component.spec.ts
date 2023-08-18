import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuDienTraCuuComponent } from './tu-dien-tra-cuu.component';

describe('TuDienTraCuuComponent', () => {
  let component: TuDienTraCuuComponent;
  let fixture: ComponentFixture<TuDienTraCuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuDienTraCuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuDienTraCuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
