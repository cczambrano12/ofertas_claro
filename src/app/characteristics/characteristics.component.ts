import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  constructor() { }

  ngOnInit(): void {
  }

}
