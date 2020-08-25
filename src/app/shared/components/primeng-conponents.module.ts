import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { GalleriaModule} from 'primeng/galleria';




@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    InputTextareaModule,
    DropdownModule,
    TieredMenuModule,
    GalleriaModule
  ],
  exports: [
    InputTextModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    InputTextareaModule,
    DropdownModule,
    TieredMenuModule,
    GalleriaModule
  ],
})
export class PrimengConponentsModule { }
