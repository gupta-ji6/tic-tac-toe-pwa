import { Component, Input, NgModule  } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button >{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})


export class SquareComponent {

  constructor() { }

  @Input() value: 'X' | 'O';


}
