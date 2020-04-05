import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizaComponent } from './analiza.component';

describe('AnalizaComponent', () => {
  let component: AnalizaComponent;
  let fixture: ComponentFixture<AnalizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
