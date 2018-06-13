import { Component } from '@angular/core';

/**
 * Generated class for the IntroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'intro',
  templateUrl: 'intro.html'
})
export class IntroComponent {

  text: string;

  constructor() {
    console.log('Hello IntroComponent Component');
    this.text = 'Hello World';
  }

}
