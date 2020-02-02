import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoComponent } from "./todo/todo.component";
import { TodoItemComponent } from "./todo/todo-item/todo-item.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { TodoFooterComponent } from "./todo/todo-footer/todo-footer.component";
import { TodoAddComponent } from "./todo/todo-add/todo-add.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoAddComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}