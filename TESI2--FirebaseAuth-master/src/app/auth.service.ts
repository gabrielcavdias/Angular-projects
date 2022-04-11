import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  authError: any;
  constructor(public firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }
  loginWithEmail(email: string, password: string) {
    let thisService = this;
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log('Logado com email e senha'))
      .catch((error) => {
        console.log(error.message);
        thisService.authError = error;
      });
  }
  loginWithGoogle() {
    let thisService = this;
    this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => console.log('Logado com google'))
      .catch((error) => {
        console.log(error.message);
        thisService.authError = error;
      });
  }
  logout() {
    this.firebaseAuth.signOut();
  }
}
