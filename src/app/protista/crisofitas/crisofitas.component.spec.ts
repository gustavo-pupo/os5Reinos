import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisofitasComponent } from './crisofitas.component';

describe('CrisofitasComponent', () => {
  let component: CrisofitasComponent;
  let fixture: ComponentFixture<CrisofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
