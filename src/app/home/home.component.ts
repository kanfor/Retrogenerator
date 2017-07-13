import {Component, OnInit} from '@angular/core';

import {Covers} from 'app/covers';
import {COVERS} from 'app/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cover: Covers[];
  
  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getData();
  }
  
  getData() {
    this.cover = COVERS;
  }
}
