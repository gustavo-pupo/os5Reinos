import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PteridofitasComponent } from './pteridofitas.component';

describe('PteridofitasComponent', () => {
  let component: PteridofitasComponent;
  let fixture: ComponentFixture<PteridofitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PteridofitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PteridofitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
