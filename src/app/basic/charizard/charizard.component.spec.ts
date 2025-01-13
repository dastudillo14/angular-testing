import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from './charizard.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service:PokemonService;
  let httpMock:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ],
      imports:[HttpClientTestingModule],
      providers:[ PokemonService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( PokemonService );
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match with snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('should show loading', () => {
    const h2 = compiled.querySelector('h2');

    expect(h2?.textContent).toContain('Loading...')
  });

  it('should show pokemon', () => {

    const mockPokemon = {
      name:'Charizardo',
      sprites:{
        front_default:'https://charizard.photo.com'
      }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');

    expect(request.request.method).toBe('GET');
    request.flush(mockPokemon);
    fixture.detectChanges();

    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent).toContain(mockPokemon.name)

  });

});
