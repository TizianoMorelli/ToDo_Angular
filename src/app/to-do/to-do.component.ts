import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ToDo } from '../model/to-do';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  template: `
     <!-- Sezione per aggiungere una cosa da fare -->
     <div class="w-full mx-auto my-4">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" (keydown.enter)="onAddToDo($event)" class="grow" placeholder="To Do" />
        <kbd class="kbd kbd-sm">Enter</kbd>
      </label>
    </div>

    <!-- Sezione ToDo -->
    <div class="w-full mx-auto my-4 border border-neutral">
      @for (ToDo of AllToDo(); track ToDo.id) {}
      <div class="flex justify-center rounded">
        <span class="label-text">
          <p>{{ToDo.name}}</p>
        </span>
      </div>
    </div>
  `,
  styles: ``
})
export class ToDoComponent implements OnInit {

  http = inject(HttpClient);

  url: string = 'http://localhost:3000/AllToDo'

  AllToDo = signal<ToDo[]>([])
  ToDo: any;

  ngOnInit(): void {
    this.http.get<ToDo[]>(this.url).subscribe(res => {
      console.log(res)
      this.AllToDo.set(res)
    });
  }

  onAddToDo(event:any){
    let nameToDo: string = event.target.value;

    let newToDo: ToDo = {
      name: nameToDo,
      completed: false,
      id: ''
    }

    this.http.post<ToDo>(this.url, newToDo). subscribe(res => {
      this.AllToDo.update( prev => [...prev, res])
    })
  }
}
