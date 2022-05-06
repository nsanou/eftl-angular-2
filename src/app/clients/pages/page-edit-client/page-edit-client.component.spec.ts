import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { PageEditClientComponent } from './page-edit-client.component';

describe('PageEditClientComponent', () => {
  let component: PageEditClientComponent;
  let fixture: ComponentFixture<PageEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditClientComponent ],
      imports: [
        RouterModule.forRoot([
          {
              path: '',
              component: PageEditClientComponent,
          }
        ]),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          url: of(['edit', '1']),
          snapshot: new ActivatedRouteSnapshot()
        }},
        { provide: HttpClient, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
