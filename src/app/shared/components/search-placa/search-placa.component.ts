import { Component, OnInit } from '@angular/core';
import { appConstants } from 'src/app/global/constants';

@Component({
  selector: 'app-search-placa',
  templateUrl: './search-placa.component.html',
  styleUrls: ['./search-placa.component.scss']
})
export class SearchPlacaComponent implements OnInit {
  btnContinuar = appConstants.BUTON_ACEPT;
  display = false;
  opciones = {
    width: '50%'
  };

  constructor() { }

  ngOnInit(): void {
    this.CambioViewPort();
  }

  CambioViewPort(): void {
    const tamano = window.innerWidth;
    if (tamano < 600) {
      this.opciones = {
        width: '90%'
      };
    }
  }

}
