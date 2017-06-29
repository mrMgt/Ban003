import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'key-up-enter',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpEnterComponent1111 {
  value = '';
  onEnter(value: string) { this.value = value; }
}
