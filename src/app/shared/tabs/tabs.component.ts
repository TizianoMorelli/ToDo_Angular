import { Component } from '@angular/core';
import { ToDoComponent } from '../../to-do/to-do.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    ToDoComponent,
    CommonModule
  ],
  template: `
    <div class="w-full">
    <div class="flex justify-center">
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral': tab == 1}" (click)="tab=1">To Do</button>
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral': tab == 2}" (click)="tab=2">Done</button>
      </div>
      @if (tab === 1) {
        <app-to-do></app-to-do>
      }@else {
        <div>tab 2</div>
      }
    </div>
  `,
  styles: ``
})
export class TabsComponent {
  tab: number = 1;
}
