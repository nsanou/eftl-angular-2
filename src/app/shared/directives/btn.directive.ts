import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {

  // Condition pour laisser le bouton actif
  @Input()
  public appBtn: string = 'primary';

  // Lien vers l'attribut class de l'élément du DOM
  @HostBinding('class')
  public buttonClass = '';

  constructor() { }

  ngOnInit(): void {
    // Si la condition n'est pas remplie, on désactive
    this.buttonClass = `btn btn-${this.appBtn}`;
  }

}
