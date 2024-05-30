import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  template: `
     <!-- Sezione per aggiungere una cosa da fare -->
     <div class="w-full mx-auto my-4">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="To Do" />
        <kbd class="kbd kbd-sm">Enter</kbd>
      </label>
    </div>

    <!-- Sezione ToDo -->
    <div class="w-full mx-auto my-4 border border-neutral">
      <div class="flex justify-center rounded">

      </div>
    </div>
  `,
  styles: ``
})
export class ToDoComponent {

}
