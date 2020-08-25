import { Component, OnInit } from '@angular/core';
import { appConstants } from 'src/app/global/constants';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  btnContinuar = appConstants.BUTON_ACEPT;
  btnRegresar = appConstants.BUTTON_CANCEL;
  cities: any[];
  value8: any;
  items: MenuItem[];
  constructor() {
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
        { label: 'Apartamento', command: this.tipoResidencia}
      ]
    }];
  }
  tipoResidencia(menu?): void {
    this.value8 = menu.item.label;
    console.log(menu.item.label);
  }

}
