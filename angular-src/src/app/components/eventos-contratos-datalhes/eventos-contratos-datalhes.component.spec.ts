import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosContratosDatalhesComponent } from './eventos-contratos-datalhes.component';

describe('EventosContratosDatalhesComponent', () => {
  let component: EventosContratosDatalhesComponent;
  let fixture: ComponentFixture<EventosContratosDatalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosContratosDatalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosContratosDatalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
