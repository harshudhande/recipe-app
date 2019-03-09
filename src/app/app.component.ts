import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  constructor() { }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDzEDr0QXeTc_C8ZgHnZQO6t4a509yjlZA",
      authDomain: "recipe-app-5fb1c.firebaseapp.com"
    });
  }

 
}
