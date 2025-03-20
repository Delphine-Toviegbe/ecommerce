import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private auth = inject(Auth)

  public email : string ='';
  public password : string = '';

  router = inject(Router);

  public login(){
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log('This is a user', user.email);
      this.router.navigateByUrl('/')
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });


  }
}
