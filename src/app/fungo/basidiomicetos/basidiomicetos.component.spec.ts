import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasidiomicetosComponent } from './basidiomicetos.component';

describe('BasidiomicetosComponent', () => {
  let component: BasidiomicetosComponent;
  let fixture: ComponentFixture<BasidiomicetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasidiomicetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasidiomicetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
