import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriofitasComponent } from './briofitas.component';

describe('BriofitasComponent', () => {
  let component: BriofitasComponent;
  let fixture: ComponentFixture<BriofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
