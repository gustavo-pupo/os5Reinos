import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FungoComponent } from './fungo.component';

describe('FungoComponent', () => {
  let component: FungoComponent;
  let fixture: ComponentFixture<FungoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FungoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FungoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
