import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquinodermosComponent } from './equinodermos.component';

describe('EquinodermosComponent', () => {
  let component: EquinodermosComponent;
  let fixture: ComponentFixture<EquinodermosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquinodermosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquinodermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
