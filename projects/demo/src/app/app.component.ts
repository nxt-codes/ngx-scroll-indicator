import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxScrollProgressComponent, ScrollDirective } from '../../../ngx-scroll-progress/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxScrollProgressComponent,
    ScrollDirective,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
