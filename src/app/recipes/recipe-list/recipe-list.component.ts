import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a test guy 1', 'http://test-ipv6.com/images/hires_offline.png'),
    new Recipe('A Test Recipe 2', 'This is a test guy 2', 'http://test-ipv6.com/images/hires_offline.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
