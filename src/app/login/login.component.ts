import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  $input!: InputEvent;
  handleEvent(event: MouseEvent | any) {
    console.log('Login Button is clicked');
    console.log('Function :', event);
    console.log('Function :', event.type);
    console.log('Function :', event.target);
    console.log('CLASS IS : ', (event.target as Element).className);
  }
  handleEventInput(event: Event) {
    console.log('Function :', event);
    console.log('Function :', event.target);
    console.log('Function :', (event?.target as HTMLInputElement).value);
  }
}
