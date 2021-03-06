import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})



export class DishdetailComponent implements OnInit {

  
  dish: Dish;
  
  
  constructor(private dishService: DishService,
    private _route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
   
    const id = this._route.snapshot.params['id'];
    this.dish = this.dishService.getDish(id);
  }
 
  goBack(): void {
    this.location.back();
  }

}
