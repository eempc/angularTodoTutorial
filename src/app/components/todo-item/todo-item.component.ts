import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // Jeez: Input, import the model, @Input nonsense, then look at the two todo components
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

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
    // Toggle in UI
    console.log("toggle");
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log("delete");
  }

}
