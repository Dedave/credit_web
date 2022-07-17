import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() active = '';
openside = false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
openExt()
{
  this.openside= !this.openside
}
redirectTo(uri:string){
    
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate([uri]));
}
}
