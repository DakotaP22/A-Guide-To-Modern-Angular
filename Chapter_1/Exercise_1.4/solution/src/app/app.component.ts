import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { SimpleMessageComponent } from './components/simple-message/simple-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // added SimpleMessageComponent to imports
  imports: [CommonModule, HelloWorldComponent, SimpleMessageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'example';
}
