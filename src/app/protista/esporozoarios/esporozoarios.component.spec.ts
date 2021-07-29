import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsporozoariosComponent } from './esporozoarios.component';

describe('EsporozoariosComponent', () => {
  let component: EsporozoariosComponent;
  let fixture: ComponentFixture<EsporozoariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsporozoariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsporozoariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
