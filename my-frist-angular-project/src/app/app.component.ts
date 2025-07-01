import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

// This uses inline HTML and inline CSS. Normally we split this up.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [
    `
      // p {
      //   background-color: red;
      // }
      main {
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-frist-angular-project';
}
