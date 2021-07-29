import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizopodesComponent } from './rizopodes.component';

describe('RizopodesComponent', () => {
  let component: RizopodesComponent;
  let fixture: ComponentFixture<RizopodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RizopodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RizopodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
