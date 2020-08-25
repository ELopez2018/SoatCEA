import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengConponentsModule } from './components/primeng-conponents.module';
import { SearchPlacaComponent } from './components/search-placa/search-placa.component';



@NgModule({
  declarations: [
    SearchPlacaComponent
  ],
  imports: [
    CommonModule,
    PrimengConponentsModule
  ],
  exports: [
    SearchPlacaComponent,
    PrimengConponentsModule
  ]
})
export class SharedModule { }
