import { Component } from '@angular/core';

import { Animation } from './class/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [  Animation ]
})
export class AppComponent {
  
}
