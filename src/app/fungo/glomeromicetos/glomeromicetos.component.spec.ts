import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlomeromicetosComponent } from './glomeromicetos.component';

describe('GlomeromicetosComponent', () => {
  let component: GlomeromicetosComponent;
  let fixture: ComponentFixture<GlomeromicetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlomeromicetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlomeromicetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
