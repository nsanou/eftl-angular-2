import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-burger',
  templateUrl: './icon-burger.component.html',
  styleUrls: ['./icon-burger.component.scss']
})
export class IconBurgerComponent implements OnInit {

  public icone = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
