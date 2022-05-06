import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TvaPipe } from './pipes/tva.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnDirective } from './directives/btn.directive';

@NgModule({
  declarations: [
    TvaPipe,
    BtnDirective
  ],
  imports: [
    CommonModule
  ], exports: [
    TemplatesModule,
    TvaPipe,
    ReactiveFormsModule,
    BtnDirective
  ]
})
export class SharedModule { }
