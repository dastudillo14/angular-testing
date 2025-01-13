import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from './father.component';
import { FatherSonComponent } from '../father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('debe mostrar el nombre del cliente', () => {
    component.onSetClient('Dantee');
    fixture.detectChanges();
    const codeElement = compiled.querySelector('.mt-2');

    console.log(codeElement?.textContent);

    expect(codeElement?.textContent).toContain('Dantee');
  });

  it('debe de borrar el cliente si se emite onDeleteClient (hijo)', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();

    //Busca un componente hijo
    const sonDebugComponent = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );

    const sonComponent: FatherSonComponent =
      sonDebugComponent.componentInstance;

    sonComponent.onDeleteClient.emit();

    expect(component.client).toBe(undefined); //Equivalente a la linea 14 del html
  });

  it('debe actualizar el cliente onClientUpdated', () => {
    component.client = {
      id: 1,
      name: 'Dantee',
    };
    fixture.detectChanges();

    //Busca un componente hijo
    const sonDebugComponent = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );

    const sonComponent: FatherSonComponent =
      sonDebugComponent.componentInstance;

    const newClient = { id: 90, name: 'Pedro' };

    sonComponent.onClientUpdated.emit(newClient);

    expect(component.client).toEqual(newClient);
  });
});
