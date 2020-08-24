import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [InputTextModule,  CardModule, ButtonModule],
  exports: [InputTextModule,  CardModule, ButtonModule],
})
export class PrimengConponentsModule { }
