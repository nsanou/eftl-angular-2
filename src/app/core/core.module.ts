import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    HeaderComponent,
    FooterComponent,

    UiModule,
    IconsModule
  ]
})
export class CoreModule { }
