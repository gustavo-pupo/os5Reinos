import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuglenofitasComponent } from './euglenofitas.component';

describe('EuglenofitasComponent', () => {
  let component: EuglenofitasComponent;
  let fixture: ComponentFixture<EuglenofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuglenofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuglenofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
