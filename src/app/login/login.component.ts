import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    // this.db.list("users").update("vWA35MsyJsWI9Q06Xudhlao1nCV2", {
    //   name: "Admin",
    //   isAdmin: true
    // })
  }

  login(data) {
    // console.log("123");
    console.log(data);
    this.afAuth.signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.afAuth.authState.subscribe(user => {
          this.db.list("users/" + user.uid).valueChanges().subscribe(data => {
            console.log(data);
          })
          console.log(user)
        })
      });
  }

}
