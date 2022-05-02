import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe(
      resultat => this.clients = resultat
    );
  }

}
