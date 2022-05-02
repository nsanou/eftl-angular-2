import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "login", loadChildren:
    () => import('./login/login.module')
      .then( (m) => m.LoginModule )
  },
  {path: "clients", loadChildren:
    () => import('./clients/clients.module')
      .then( (m) => m.ClientsModule )
  },
  {path: "**", loadChildren:
    () => import('./page-not-found/page-not-found.module')
      .then( (m) => m.PageNotFoundModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
