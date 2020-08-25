import { Component, OnInit } from '@angular/core';
import { appConstants } from 'src/app/global/constants';


@Component({
  selector: 'app-form-vehiculos',
  templateUrl: './form-vehiculos.component.html',
  styleUrls: ['./form-vehiculos.component.scss']
})
export class FormVehiculosComponent implements OnInit {

  btnContinuar = appConstants.BUTON_ACEPT ;
  btnRegresar = appConstants.BUTTON_CANCEL;
  constructor() { }

  ngOnInit(): void {
  }

}
