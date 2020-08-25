import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasolineraComponent } from './gasolinera.component';

describe('GasolineraComponent', () => {
  let component: GasolineraComponent;
  let fixture: ComponentFixture<GasolineraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasolineraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasolineraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
