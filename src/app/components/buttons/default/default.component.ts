import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  @Input() sText !: string;
}
