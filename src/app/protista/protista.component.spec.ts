import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtistaComponent } from './protista.component';

describe('ProtistaComponent', () => {
  let component: ProtistaComponent;
  let fixture: ComponentFixture<ProtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
