import { Component } from '@angular/core';

@Component({
  selector: 'app-showbellbutton',
  templateUrl: './showbellbutton.component.html',
  styleUrl: './showbellbutton.component.css'
})
export class ShowbellbuttonComponent {
  message: string = '';

  showMessage() {
    this.message = 'Hello World';
  }

}
