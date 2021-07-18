import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnelideosComponent } from './anelideos.component';

describe('AnelideosComponent', () => {
  let component: AnelideosComponent;
  let fixture: ComponentFixture<AnelideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnelideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnelideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
