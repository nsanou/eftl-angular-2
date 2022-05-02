import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconAddComponent } from './components/icon-add/icon-add.component';
import { IconBurgerComponent } from './components/icon-burger/icon-burger.component';
import { IconSigninComponent } from './components/icon-signin/icon-signin.component';
import { IconSignoutComponent } from './components/icon-signout/icon-signout.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    IconEditComponent,
    IconAddComponent,
    IconBurgerComponent,
    IconSigninComponent,
    IconSignoutComponent,
    IconCloseComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconEditComponent,
    IconAddComponent,
    IconBurgerComponent,
    IconSigninComponent,
    IconSignoutComponent,
    IconCloseComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
