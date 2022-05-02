import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule //TODO REMOVE
  ], exports: [
    UiComponent
  ]
})
export class UiModule { }
