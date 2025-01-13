import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from './father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compile: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compile = fixture.nativeElement;

    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match con el snpashot', () => {
    expect(compile).toMatchSnapshot();
  });

  it('no debe aparecer botones si no hay client', () => {
    const buttons = compile.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  it('debe aparecer 2 botones si  hay client', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();
    const buttons = compile.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('si hay cliente, hacer match con el snapshot', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();
    expect(compile).toMatchSnapshot();
  });

  //Probar acciones
  it('debe emitir onDeleteClient con el btn de elimina', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();
    //Espia eventos
    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compile.querySelector('[data-test=btnDelete]');

    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled()
  });

  it('debe emitir onClientUpdated con el btn de cambiar id', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();
    //Espia eventos
    jest.spyOn(component.onClientUpdated, 'emit');

    const btnDelete = compile.querySelector('[data-test=btnUpdate]');

    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith(component.client)
  });

  it('no debe emitir un cliente si no fue seteado',()=>{
    jest.spyOn(component.onClientUpdated,'emit');

    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

  });
});
