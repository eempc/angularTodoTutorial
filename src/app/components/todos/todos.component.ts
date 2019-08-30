import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //Properties with a model called ToDo that is imported as above with the relative path
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    }); // Subscribe to the Observable in service
  }

}
