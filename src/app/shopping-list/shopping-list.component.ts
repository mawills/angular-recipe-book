import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Milk',5),
    new Ingredient('Pizza',5),
    new Ingredient('Burrito',7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
