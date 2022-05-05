import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    IconsModule,
    FormsModule,
    NgbModule,

    SharedModule
  ],
  exports: [
    PageAddClientComponent,
    PageEditClientComponent,
    PageListClientsComponent
  ]
})
export class ClientsModule { }
