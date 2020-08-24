import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    MenuModule
  ],
  exports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule
  ],
})
export class PrimengConponentsModule { }
