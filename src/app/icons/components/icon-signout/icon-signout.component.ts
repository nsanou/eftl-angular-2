import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-signout',
  templateUrl: './icon-signout.component.html',
  styleUrls: ['./icon-signout.component.scss']
})
export class IconSignoutComponent implements OnInit {

  public icone = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
