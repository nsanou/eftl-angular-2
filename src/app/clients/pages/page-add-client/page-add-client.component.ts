import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public formulaire!: FormGroup;

  // public id: number = 0;
  // public name: string = '';

  public success = false;
  public failure = false;

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulaire =
      this.formBuilder.group({
        id: [10, [Validators.min(10)]],
        name: ['',
          [Validators.minLength(5), Validators.maxLength(25),
            Validators.pattern('^[0-9]*$')]]
      });
  }

  ajouter() {
    console.info(this.formulaire.value);

    this.clientsService.addClient(
      this.formulaire.value as Client
    ).subscribe({
      next: () => { this.success = true; },
      error: () => { this.failure = true; }
    });
  }

  goBackToList() {
    this.router.navigate(['../list'], {relativeTo: this.activatedRoute})
  }
}
