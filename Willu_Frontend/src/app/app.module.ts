import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService, API_BASE_URL, AccountService } from './services/generated-client';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    [AccountService],
    { provide: API_BASE_URL, useValue: 'http://localhost:5092' } // Set the API base URL here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
