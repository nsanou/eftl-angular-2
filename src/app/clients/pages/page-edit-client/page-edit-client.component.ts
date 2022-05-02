import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  private clientId: number = 0;
  public client: Client = {} as Client;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService) { }

  getClientId() {
    return this.clientId;
  }

  ngOnInit(): void {
    // on récupère la dernière partie de l'URL pour obtenir le clientId
    this.activatedRoute.url.subscribe(
      url => {
        this.clientId = Number(url[url.length - 1]);

        // On recherche le client
        this.clientsService.getClientById(this.clientId).subscribe(
          client => this.client = client
        );
      }
    );
  }

}
