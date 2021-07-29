import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaeophytasComponent } from './phaeophytas.component';

describe('PhaeophytasComponent', () => {
  let component: PhaeophytasComponent;
  let fixture: ComponentFixture<PhaeophytasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaeophytasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaeophytasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
