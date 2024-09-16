import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCard } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router'; // Para controlar la navegación

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private platform: Platform, private router: Router) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  handleBackButton() {
    const currentUrl = this.router.url; 
    if (currentUrl === '/home') {
      console.log('Botón back deshabilitado en Home');
    } else {
      this.router.navigate(['/home']); 
    }
  }
}

