import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public id: number = 0;
  public name: string = '';

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
  }

  ajouter() {
    console.log(this.id);
    console.log(this.name);
    this.clientsService.addClient(
      {id: this.id, name: this.name} as Client
    ).subscribe();
  }
}
