import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClorofitasComponent } from './clorofitas.component';

describe('ClorofitasComponent', () => {
  let component: ClorofitasComponent;
  let fixture: ComponentFixture<ClorofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClorofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClorofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
