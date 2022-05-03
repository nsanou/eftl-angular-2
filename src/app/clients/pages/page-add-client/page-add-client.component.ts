import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public success = false;
  public failure = false;

  constructor(private clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ajouter() {
    this.clientsService.addClient(
      {id: this.id, name: this.name} as Client
    ).subscribe({
      next: () => { this.success = true; },
      error: () => { this.failure = true; }
    });
  }

  goBackToList() {
    this.router.navigate(['../list'], {relativeTo: this.activatedRoute})
  }
}
