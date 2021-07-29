import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodofitasComponent } from './rodofitas.component';

describe('RodofitasComponent', () => {
  let component: RodofitasComponent;
  let fixture: ComponentFixture<RodofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
