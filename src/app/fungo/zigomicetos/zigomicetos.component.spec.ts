import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZigomicetosComponent } from './zigomicetos.component';

describe('ZigomicetosComponent', () => {
  let component: ZigomicetosComponent;
  let fixture: ComponentFixture<ZigomicetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZigomicetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZigomicetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
