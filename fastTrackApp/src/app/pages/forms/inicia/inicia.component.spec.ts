import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaComponent } from './inicia.component';

describe('IniciaComponent', () => {
  let component: IniciaComponent;
  let fixture: ComponentFixture<IniciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
