import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnospermasComponent } from './gimnospermas.component';

describe('GimnospermasComponent', () => {
  let component: GimnospermasComponent;
  let fixture: ComponentFixture<GimnospermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnospermasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnospermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
