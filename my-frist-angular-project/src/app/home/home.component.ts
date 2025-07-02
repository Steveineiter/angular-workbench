import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello from home');

  keyUpHandler(event: KeyboardEvent) {
    // console.log('user typed something in the input');
    console.log(`user pressed the ${event.key} key`);
  }
}
