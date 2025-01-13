import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from './counter-route.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  let compile: HTMLElement;

  it('debe tener el valor inicial en 0', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;

    expect(component.counter).toBe(0);
  });

  it('debe tener el valor inicial en 100 en la ruta /100', async () => {
    const mockActivatedRouter = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? 100 : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;

    expect(component.counter).toBe(100);
  });

  it('debe tener el valor inicial en 10 en la ruta abc', async () => {
    const mockActivatedRouter = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? 'abc' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRouter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compile = fixture.nativeElement;

    expect(component.counter).toBe(10);
  });
});
