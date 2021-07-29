import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CilioforosComponent } from './cilioforos.component';

describe('CilioforosComponent', () => {
  let component: CilioforosComponent;
  let fixture: ComponentFixture<CilioforosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CilioforosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CilioforosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
