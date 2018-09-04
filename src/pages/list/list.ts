import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { ListService } from './list.service';
import { TodoInterface } from './list.interface';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  icons: string[];
  items: Array<TodoInterface>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private listService: ListService) { }

  ngOnInit() {
    this.listService.getTodos().subscribe( (todos: TodoInterface[]) => {
      this.items = todos;
    });
  }

  cambiarEstadoTodo(id, estado): void {
    this.listService
    .cambiarEstadoTodo(id, estado).subscribe( (todo) => {
      const item = this.items.findIndex( (item) => {
        return item.id === todo.id;
      });
      this.items[item].finished = todo.finished;
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
