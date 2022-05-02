import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSigninComponent } from './icon-signin.component';

describe('IconSigninComponent', () => {
  let component: IconSigninComponent;
  let fixture: ComponentFixture<IconSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
