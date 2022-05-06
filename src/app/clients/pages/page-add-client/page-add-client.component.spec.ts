import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

import { PageAddClientComponent } from './page-add-client.component';

describe('PageAddClientComponent', () => {
  let component: PageAddClientComponent;
  let fixture: ComponentFixture<PageAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddClientComponent ],
      imports: [
        RouterModule.forRoot([
          {
              path: '',
              component: PageAddClientComponent,
          }
        ]),
        ReactiveFormsModule
      ],
      providers: [
        { provide: ClientsService, useValue: {} },
        { provide: HttpClient, useValue: {} },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
