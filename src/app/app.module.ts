import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";

export const firebaseConfig = {
  apiKey: "AIzaSyCVw2c1DLHAfB0CBybsvXQOXx1l5RV5--E",
  authDomain: "ufraverosol-aa67c.firebaseapp.com",
  databaseURL: "https://ufraverosol-aa67c.firebaseio.com",
  projectId: "ufraverosol-aa67c",
  storageBucket: "ufraverosol-aa67c.appspot.com",
  messagingSenderId: "525604248444"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
