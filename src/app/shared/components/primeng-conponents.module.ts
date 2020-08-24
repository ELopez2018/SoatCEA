import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule],
  exports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule
  ],
})
export class PrimengConponentsModule { }
