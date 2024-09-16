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

    this.profilePic = 'https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png';  // Ruta de la imagen predeterminada
  }

  
  uploadPicture() {

    alert('Funcionalidad de subir imagen en desarrollo.');
  }

  
  onSubmit() {
    if (this.profileForm.valid) {
      const { firstName, lastName, email } = this.profileForm.value;
      alert(`USARIO MODIFICADO: ${firstName} ${lastName} (${email})`);
    } else {
      alert('Por favor, complete el formulario correctamente.');
    }
  }
}

