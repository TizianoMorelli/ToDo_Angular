import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './shared/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabsComponent
  ],
  template: `
  <div class="flex items-center justify-center h-screen">
  <div class="text-center">
  <h1 class="text-purple-600">Welcome to {{title}}!</h1>
  <app-tabs />
  </div>
  </div>
  
  `,
  styles: [],
})
export class AppComponent {
  title = 'ToDo-list';
}
