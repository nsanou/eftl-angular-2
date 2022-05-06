import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsService } from '../../services/clients.service';

import { PageListClientsComponent } from './page-list-clients.component';

describe('PageListClientsComponent', () => {
  let component: PageListClientsComponent;
  let fixture: ComponentFixture<PageListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListClientsComponent ],
      imports: [
        SharedModule
      ],
      providers: [
        { provide: ClientsService, useValue: {
          getAllClients() {
            return of([{} as Client]);
          }
        }},
        { provide: HttpClient, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
