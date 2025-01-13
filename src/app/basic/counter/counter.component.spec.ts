import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match con el spanshot',()=>{
    expect(compiled).toMatchSnapshot()
  })

  it('debe de incrementar basado en el arg',()=>{
    component.increasyBy(1);

    expect( component.counter).toBe(11)
  });

  it('debe de inc y dec en 1 al hacer click en los btns',()=>{
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect( component.counter).toBe(11);
    buttons[1].click();
    expect( component.counter).toBe(10);

  });

  it('debe de reflejar el counter correcto en el html ',()=>{
    component.increasyBy(10);
    fixture.detectChanges()
    const h1 = compiled.querySelector('h1');
    expect( h1?.textContent ).toContain('20')
  });

});
