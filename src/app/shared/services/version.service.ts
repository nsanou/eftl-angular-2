import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  private numVersion$ = new BehaviorSubject(1);

  constructor() { }

  public incrementerVersion(): void {
    this.numVersion$.next(this.numVersion$.value + 1);
  }

  public getVersion$(): Observable<number> {
    return this.numVersion$;
  }
}
