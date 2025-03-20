import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  private auth = inject(Auth)

    public email : string ='';
    public password : string = '';

    router = inject(Router);

    public signUp(){
        createUserWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
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