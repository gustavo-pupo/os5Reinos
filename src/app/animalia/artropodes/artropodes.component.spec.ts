import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtropodesComponent } from './artropodes.component';

describe('ArtropodesComponent', () => {
  let component: ArtropodesComponent;
  let fixture: ComponentFixture<ArtropodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtropodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtropodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
