import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { signUpComponent } from './signUp/signUp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,signUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name='asdf'
  title = 'first-angular by keshav';
}
