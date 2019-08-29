import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // Jeez: Input, import the model, @Input nonsense, then look at the two todo components
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses () {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  // Toggle

  onToggle(todo) {
    console.log("toggle");
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log("delete");
  }

}
