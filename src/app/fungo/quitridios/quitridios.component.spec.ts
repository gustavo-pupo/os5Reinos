import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitridiosComponent } from './quitridios.component';

describe('QuitridiosComponent', () => {
  let component: QuitridiosComponent;
  let fixture: ComponentFixture<QuitridiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitridiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitridiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
