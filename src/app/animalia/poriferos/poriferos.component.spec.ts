import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoriferosComponent } from './poriferos.component';

describe('PoriferosComponent', () => {
  let component: PoriferosComponent;
  let fixture: ComponentFixture<PoriferosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoriferosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoriferosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
