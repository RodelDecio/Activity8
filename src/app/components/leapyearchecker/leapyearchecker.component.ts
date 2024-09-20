import { Component } from '@angular/core';

@Component({
  selector: 'app-leapyearchecker',
  templateUrl: './leapyearchecker.component.html',
  styleUrls: ['./leapyearchecker.component.css']
})
export class LeapYearCheckerComponent {
  year: number = 0;
  isLeapYear: string = '';

  // Method to check if the entered year is a leap year
  checkLeapYear(): void {
    if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
      this.isLeapYear = `${this.year} is a leap year.`;
    } else {
      this.isLeapYear = `${this.year} is not a leap year.`;
    }
  }
}
