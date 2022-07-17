import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
cover=true
coverr=true
up=true
upp=true
  constructor() { }

  ngOnInit(): void {
  }
  openCover(){
    this.cover= !this.cover
    this.up=!this.up
  }
  opencover(){
    this.coverr= !this.coverr
    this.upp=!this.upp
  }

}
