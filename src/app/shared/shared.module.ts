import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengConponentsModule } from './components/primeng-conponents.module';
import { SearchPlacaComponent } from './components/search-placa/search-placa.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';



@NgModule({
  declarations: [
    SearchPlacaComponent,
    StatusbarComponent
  ],
  imports: [
    CommonModule,
    PrimengConponentsModule
  ],
  exports: [
    SearchPlacaComponent,
    PrimengConponentsModule,
    StatusbarComponent
  ]
})
export class SharedModule { }
