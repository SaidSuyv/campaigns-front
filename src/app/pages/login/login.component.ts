import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { DefaultComponent } from '../../components/buttons/default/default.component'

@Component({
  selector: 'app-login',
  imports: [
    InputComponent,
    DefaultComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
