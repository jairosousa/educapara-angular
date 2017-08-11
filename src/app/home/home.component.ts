import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Observable<firebase.User>

  nome: string

  email: string

  senha: string

  urlImagem: string

  interesse: string[]

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  loginEmail() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.senha)
      .catch((erro: any) => {
        console.log(erro)
      })
  }

  CadastroEmail() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
      .then((response: any) => {
        console.log(response)
        let usuario = firebase.auth().currentUser
        usuario.updateProfile({
          displayName: this.nome,
          photoURL: this.urlImagem
        })
      })
      .catch((erro: any) => {
        console.log(erro)
      })
  }

  sair() {
    this.afAuth.auth.signOut()
  }

}
