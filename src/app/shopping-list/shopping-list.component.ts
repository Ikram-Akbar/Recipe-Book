import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Banana", 10),
    new Ingredient("Pine Apple", 25),
    new Ingredient("Mango", 5),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
