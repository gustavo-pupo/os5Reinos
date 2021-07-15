import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneraComponent } from './monera.component';

describe('MoneraComponent', () => {
  let component: MoneraComponent;
  let fixture: ComponentFixture<MoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
