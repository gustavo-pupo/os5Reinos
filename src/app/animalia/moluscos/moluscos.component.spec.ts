import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoluscosComponent } from './moluscos.component';

describe('MoluscosComponent', () => {
  let component: MoluscosComponent;
  let fixture: ComponentFixture<MoluscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoluscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoluscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
