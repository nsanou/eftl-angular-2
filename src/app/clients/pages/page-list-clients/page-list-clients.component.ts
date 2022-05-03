import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientsService: ClientsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.clientsService.getAllClients().subscribe(
      resultat => this.clients = resultat
    );
  }

  deleteClient(clientId: number) {
    this.clientsService.deleteClient(clientId).subscribe(
      {complete: () => {
        // alert('suppression ok');
        this.fetchClients();
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
