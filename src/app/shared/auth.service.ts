import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}
  token:string;
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).
      then((response) => {
        this.router.navigate(['signin']);
      }).
      catch(error => {
        console.log(error);
      });
  }
  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).
      then((response) => {
        this.router.navigate(['./']);
        firebase.auth().currentUser.getIdToken().
          then((token:string) => {
            this.token = token;})
      }).
      catch(error => {console.log(error);
  });
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => { this.token = token; });
    return this.token;
  }
  //this method is needed to allow delete and edit recipe on sign in
  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut().
      then((response) => { this.router.navigate(['']); }).catch(error => { console.log(error);});
    this.token = null;
  }
}
