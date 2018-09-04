import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { TodoInterface } from './list.interface';

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoInterface[]> {
    return this.http
      .get<TodoInterface[]>("http://localhost:3000/todos")
      .map( todos => {
        return todos.map(product => product);
      });
  }

  cambiarEstadoTodo(id, estado): Observable<TodoInterface> {
    return this.http
    .put<TodoInterface>(`http://localhost:3000/todos/${id}`,
    {id: id, finished: !estado});
  }

}
