import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengConponentsModule } from './components/primeng-conponents.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengConponentsModule
  ],
  exports: [
    PrimengConponentsModule
  ]
})
export class SharedModule { }
