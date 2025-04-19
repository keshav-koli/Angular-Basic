import { Component } from '@angular/core';

@Component({
  selector: 'signUp',
  imports: [],
  styles: '',
  templateUrl: './signUp.Component.html',
})
export class signUpComponent {
  sname: string = '';
  DisplayName = '';
  email = '';
  handleName(event: Event) {
    // console.log((event.target as HTMLInputElement).value);
    this.DisplayName = (event.target as HTMLInputElement).value;
  }
  getName() {
    this.sname = this.DisplayName;
  }
  setName() {
    this.DisplayName = 'Default Name';
  }

  getEmail(email: string) {
    this.email = email;
  }
  setEmail() {
    this.email = 'default@gmail.com';
  }
}
