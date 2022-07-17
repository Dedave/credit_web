import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
openside = false
  constructor() { }

  ngOnInit(): void {
  }
openExt()
{
  this.openside= !this.openside
}
}
