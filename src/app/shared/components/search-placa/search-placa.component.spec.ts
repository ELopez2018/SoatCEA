import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlacaComponent } from './search-placa.component';

describe('SearchPlacaComponent', () => {
  let component: SearchPlacaComponent;
  let fixture: ComponentFixture<SearchPlacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPlacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
