import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, map, Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  //public clients: Client[] = [];
  public clients$!: Observable<Client[]>;

  constructor(private clientsService: ClientsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.fetchClients();
    this.clients$ = this.clientsService.getAllClients().pipe(
      // map(clients => [clients[0]])
    );
  }

  /*
  fetchClients() {
    this.clientsService.getAllClients().subscribe({
      next: resultat => {
        this.clients = resultat
      },
      complete: () => console.info("TEST SUBSCRIBE CLIENTS complete")
    });
  }
  */

  deleteClient(clientId: number) {
    this.clientsService.deleteClient(clientId).subscribe(
      {complete: () => {
        // alert('suppression ok');
        // this.fetchClients();
        this.clients$ = this.clientsService.getAllClients();
      }}
    );
  }

  confirmDeletion(content: any, clientId: number) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
        if (result) {
          this.deleteClient(clientId);
        }
    }, (reason) => {

    });
  }
}
