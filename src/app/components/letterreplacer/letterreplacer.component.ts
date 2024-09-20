import { Component } from '@angular/core';

@Component({
  selector: 'app-letterreplacer',
  templateUrl: './letterreplacer.component.html',
  styleUrls: ['./letterreplacer.component.css']
})
export class LetterReplacerComponent {
  word: string = '';
  letterToReplace: string = '';
  replacementLetter: string = '';
  updatedWord: string = '';


  replaceLetter(): void {
    if (this.letterToReplace.length !== 1 || this.replacementLetter.length !== 1) {
      this.updatedWord = 'Please enter single characters for both letters!';
    } else {
      this.updatedWord = this.word.split(this.letterToReplace).join(this.replacementLetter);
    }
  }
}
