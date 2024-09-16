import { addIcons } from 'ionicons';
import { Component } from '@angular/core';
import { home, person } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonIcon, IonTabs, IonTabBar]
})
export class TabsPage {

  constructor() {
    addIcons({home,person});
  }
}
