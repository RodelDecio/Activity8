import { Component } from '@angular/core';

@Component({
  selector: 'app-colorchanger',
  templateUrl: './colorchanger.component.html',
  styleUrls: ['./colorchanger.component.css']
})
export class ColorChangerComponent {
  currentColor: string = 'white';  // Default background color

  // Method to change the background color
  changeColor(color: string): void {
    this.currentColor = color;
  }
}
