import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { VersionService } from 'src/app/shared/services/version.service';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit, OnDestroy {

  private clientId: number = 0;
  public client: Client = {} as Client;

  public clientName: string = '';
  private souscriptionGetVersion: Subscription | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService,
    private router: Router,
    private versionService: VersionService
    ) { }

  ngOnDestroy(): void {
    // Destruction de l'observateur
    if (this.souscriptionGetVersion) {
      this.souscriptionGetVersion.unsubscribe();
    }
  }

  getClientId() {
    return this.clientId;
  }

  ngOnInit(): void {
    this.souscriptionGetVersion = this.versionService.getVersion$().subscribe(
      {
        next: () => console.info("TEST SUBSCRIBE next"),
        error: () => console.info("TEST SUBSCRIBE error"),
        complete: () => console.info("TEST SUBSCRIBE complete")
      }
    );

    // on récupère la dernière partie de l'URL pour obtenir le clientId
    this.activatedRoute.url.subscribe(
      url => {
        this.clientId = Number(url[url.length - 1]);

        // On recherche le client
        this.clientsService.getClientById(this.clientId).subscribe(
          client => {
            this.client = client;
            this.clientName = this.client.name;
          }
        );
      }
    );
  }

  goBackToList() {
    // navigateByUrl n'utilise que des chemins absolus
    //this.router.navigateByUrl('/clients/list');
    this.router.navigate(['../../list'], {relativeTo: this.activatedRoute})
  }

  update() {
    this.clientsService.updateClient(this.client).subscribe();
    this.goBackToList();
  }

}
