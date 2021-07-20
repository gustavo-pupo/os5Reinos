import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqueobacteriasComponent } from './arqueobacterias.component';

describe('ArqueobacteriasComponent', () => {
  let component: ArqueobacteriasComponent;
  let fixture: ComponentFixture<ArqueobacteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArqueobacteriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqueobacteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
