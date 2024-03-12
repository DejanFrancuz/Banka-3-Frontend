import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCodeComponent } from './register-code/register-code.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserListComponent,
=======
    NavbarComponent,
    UserListComponent,
    UserloginComponent,
    AdminLoginComponent,
>>>>>>> 03e8171ddab4e722b48f5713ab4345a9e345579e
    RegisterComponent,
    RegisterCodeComponent,
    RegisterPasswordComponent,
    UserProfileComponent,
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
=======

>>>>>>> 03e8171ddab4e722b48f5713ab4345a9e345579e
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        MatTableModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
