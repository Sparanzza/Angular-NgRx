import { Todo } from "./../todo/model/todo.model";
import { Pipe, PipeTransform } from "@angular/core";
import * as fromFilter from "./filter.actions";
@Pipe({
  name: "filterTodo"
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {
    console.log(todos);
    console.log(filter);

    switch (filter) {
      case "completed":
        return todos.filter(todo => todo.completed);
      case "pending":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
}
