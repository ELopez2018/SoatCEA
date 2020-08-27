import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { appConstants } from 'src/app/global/constants';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})

export class FormClienteComponent implements OnInit {

  @Output() display = new EventEmitter<boolean>();
  imgLogo = appConstants.LOGO_48X48;
  btnContinuar = appConstants.BUTON_ACEPT;
  btnRegresar = appConstants.BUTTON_CANCEL;
  cities: any[];
  value8: any;
  items: MenuItem[];
  continuarBool: boolean = false;
  constructor(
    private router: Router,
  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
    this.itemsMenu();
  }


  itemsMenu(): void {
    this.items = [{
      label: 'Trabajo',
      items: [
        { label: 'Oficina', command: this.tipoResidencia },
        { label: 'Local', command: this.tipoResidencia }
      ]
    },
    {
      label: 'Residencia',
      items: [
        { label: 'Casa', command: this.tipoResidencia },
        { label: 'Apartamento', command: this.tipoResidencia }
      ]
    }];
  }
  tipoResidencia(menu?): void {
    this.value8 = menu.item.label;
    console.log(menu.item.label);
  }
  cancel(): void {
    this.display.emit(false);
    console.log('emit');
  }
  continuar(): void {
    this.continuarBool = true;
  }

}
