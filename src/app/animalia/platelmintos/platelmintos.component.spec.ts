import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatelmintosComponent } from './platelmintos.component';

describe('PlatelmintosComponent', () => {
  let component: PlatelmintosComponent;
  let fixture: ComponentFixture<PlatelmintosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatelmintosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatelmintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
