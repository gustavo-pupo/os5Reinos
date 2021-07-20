import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EubacteriasComponent } from './eubacterias.component';

describe('EubacteriasComponent', () => {
  let component: EubacteriasComponent;
  let fixture: ComponentFixture<EubacteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EubacteriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EubacteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
