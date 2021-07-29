import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastigoforosComponent } from './mastigoforos.component';

describe('MastigoforosComponent', () => {
  let component: MastigoforosComponent;
  let fixture: ComponentFixture<MastigoforosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastigoforosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastigoforosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
