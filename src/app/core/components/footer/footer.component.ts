import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionService } from 'src/app/shared/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version: number = 0;
  public version$!: Observable<number>;

  constructor(
    private versionService : VersionService
  ) { }

  ngOnInit(): void {
    // this.getVersion();
    this.version$ = this.versionService.getVersion$();
  }

  /*
  getVersion() {
    console.info("avant");
    this.versionService.getVersion$().subscribe(
      valeur => {
        this.version = valeur;
      }
    );
  }
  */
}
