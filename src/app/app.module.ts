import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './pages/settings/settings.component';
import { SearchBoxComponent } from './forms/search-box/search-box.component';
import { IonicModule } from '@ionic/angular';
import { PreloaderComponent } from './shared/ui/preloader/preloader.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputNumericComponent } from './forms/input-numeric/input-numeric.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSearchboxComponent } from './forms/input-searchbox/input-searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    SettingsComponent,
    SearchBoxComponent,
    PreloaderComponent,
    UserListComponent,
    UserCreateComponent,
    InputNumericComponent,
    InputSearchboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
