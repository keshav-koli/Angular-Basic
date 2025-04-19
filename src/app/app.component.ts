import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { signUpComponent } from './signUp/signUp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, signUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter: number = 0;
  name: string = 'dfs';
  sname: string | number | boolean = 'asdf';
  title = 'first-angular by keshav';

  handleButton() {
    console.log('hello Ji...');
    this.handle2Button();
    this.sum(4, 8);
    console.log(this.sum(8, 7));
  }
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  reset() {
    this.counter = 0;
  }

  handle2Button() {
    this.sname = 'asd';
    this.sname = 78;
    console.log('Namaste Ji....');
  }

  sum(x: number, y: number) {
    console.log(x + y);
  }
}
