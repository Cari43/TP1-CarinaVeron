import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonInput, IonNote, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonItem, IonLabel, IonNote, ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonFooter, IonInput]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/) 
      ]),
      password: new FormControl('',
      [Validators.required,
    
      ])
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    
    if (email === 'carinaveron31@gmail.com' && password === '7066') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/tabs/home']);
    } else {
      if (email != 'carinaveron31@gmail.com')
      alert('Correo incorrecto');
      else {
        if (password != '7066') 
      alert('Contraseña incorrecta');
      }
    }
  }
  goToRegister() {
    // Redirigir a la página de registro
    this.router.navigate(['/register']);
  }
}
