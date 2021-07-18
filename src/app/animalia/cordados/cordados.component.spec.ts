import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordadosComponent } from './cordados.component';

describe('CordadosComponent', () => {
  let component: CordadosComponent;
  let fixture: ComponentFixture<CordadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
