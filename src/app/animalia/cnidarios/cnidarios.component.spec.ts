import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnidariosComponent } from './cnidarios.component';

describe('CnidariosComponent', () => {
  let component: CnidariosComponent;
  let fixture: ComponentFixture<CnidariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnidariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnidariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
