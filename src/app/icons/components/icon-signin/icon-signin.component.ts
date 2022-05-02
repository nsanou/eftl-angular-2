import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-signin',
  templateUrl: './icon-signin.component.html',
  styleUrls: ['./icon-signin.component.scss']
})
export class IconSigninComponent implements OnInit {

  public icone = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
