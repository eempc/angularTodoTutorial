import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //Properties with a model called ToDo that is imported as above with the relative path
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Eat Breakfast',
        completed: true
      },
      {
        id: 2,
        title: 'Eat Lunch',
        completed: false
      },
      {
        id: 3,
        title: 'Eat Dinner',
        completed: false
      },
    ]
  }

}
