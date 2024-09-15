import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonInput, IonNote, IonLabel, IonItem } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  imports: [IonItem, IonLabel, IonNote, ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonFooter, IonInput]
})
export class RegistrarsePage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializar el formulario de registro con validaciones
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$')]], // Regex para Gmail
      password: ['', [Validators.required, Validators.minLength(4),  Validators.pattern("^[a-zA-Z0-9._%+-]+")]], 
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador para comprobar que las contraseÃ±as coincidan
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { mismatch: true };
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { firstName, lastName, email } = this.registerForm.value;
    alert(`Usuario registrado: ${firstName} ${lastName} (${email})`);

 
    this.router.navigate(['/login']);

    


  
  }

}