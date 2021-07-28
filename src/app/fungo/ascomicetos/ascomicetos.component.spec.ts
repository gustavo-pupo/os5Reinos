import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscomicetosComponent } from './ascomicetos.component';

describe('AscomicetosComponent', () => {
  let component: AscomicetosComponent;
  let fixture: ComponentFixture<AscomicetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscomicetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscomicetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
