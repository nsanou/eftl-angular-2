import { Component, OnInit, Output, Input, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss']
})
export class TemplatePageComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public titre: string = 'Mon titre par défaut';

  //@Input()
  //public sousTitre: Client = {} as Client;

  @Output()
  public actionRetour = new EventEmitter<void>();

  ngOnDestroy(): void {
    console.info('On destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('On change', this.titre, changes);
  }

  constructor() {
    console.info('On construct');
  }

  ngOnInit(): void {
    console.info('On init');
  }

  retourner() {
    this.actionRetour.emit();
  }

}
