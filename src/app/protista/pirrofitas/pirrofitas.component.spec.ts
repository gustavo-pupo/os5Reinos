import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirrofitasComponent } from './pirrofitas.component';

describe('PirrofitasComponent', () => {
  let component: PirrofitasComponent;
  let fixture: ComponentFixture<PirrofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirrofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirrofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
