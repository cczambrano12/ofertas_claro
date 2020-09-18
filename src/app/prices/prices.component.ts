import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  test = [{
    name: "regalo",
    val: 0
  },{
    name: "barato",
    val: 10000
  },{
    name: "caro",
    val: 200000
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
