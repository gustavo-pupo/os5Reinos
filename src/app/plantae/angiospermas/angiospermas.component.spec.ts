import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngiospermasComponent } from './angiospermas.component';

describe('AngiospermasComponent', () => {
  let component: AngiospermasComponent;
  let fixture: ComponentFixture<AngiospermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngiospermasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngiospermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
