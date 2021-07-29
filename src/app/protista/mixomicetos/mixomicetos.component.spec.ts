import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixomicetosComponent } from './mixomicetos.component';

describe('MixomicetosComponent', () => {
  let component: MixomicetosComponent;
  let fixture: ComponentFixture<MixomicetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixomicetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixomicetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
