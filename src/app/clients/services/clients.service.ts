import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {


  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.url}/clients`);
  }

  getClientById(clientId: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/clients/${clientId}`);
  }

  addClient(client: Client): Observable<void> {
    return this.httpClient.post<void>(`${this.url}/clients`, client);
  }
}
