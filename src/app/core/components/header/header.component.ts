import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit(): void {
  }

  public incrementerVersion() {
    console.info('aaaaaaaaaaaaa');
    //alert('hello');
    console.info('bbbbbbbbbbbb');
    this.versionService.incrementerVersion();
  }
}
