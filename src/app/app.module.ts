import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
<<<<<<< HEAD
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> dc83983294fb8ff81d324d6089d94b00dfab8c96
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import {MatSortModule} from "@angular/material/sort";
import {PaswordPopupComponent} from "./pasword-popup/pasword-popup.component";



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
<<<<<<< HEAD
=======
    PaswordPopupComponent,
>>>>>>> dc83983294fb8ff81d324d6089d94b00dfab8c96
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatTableModule,
=======

>>>>>>> 03e8171ddab4e722b48f5713ab4345a9e345579e
=======
    NgbModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule
>>>>>>> dc83983294fb8ff81d324d6089d94b00dfab8c96
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
