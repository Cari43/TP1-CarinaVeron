import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class ProfilePage {
  profileForm: FormGroup;
  profilePic: string;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.profilePic = 'assets/shapes.svg';
  }

  
  uploadPicture() {
    console.log('Subir imagen de perfil');
    
  }

  
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Datos de perfil guardados:', this.profileForm.value);
    }
  }
}

