import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NematelmintosComponent } from './nematelmintos.component';

describe('NematelmintosComponent', () => {
  let component: NematelmintosComponent;
  let fixture: ComponentFixture<NematelmintosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NematelmintosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NematelmintosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
