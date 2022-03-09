import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'dashboard', component:DashboardComponent
  },
  {
    path: 'settings', component:SettingsComponent
  },
  {
    path: 'user/user-list', component:UserListComponent
  },
  {
    path: 'user/user-create', component:UserCreateComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
