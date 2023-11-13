import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
  }


  public showMenu() {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu?.classList.toggle('bx-x');
    navlist?.classList.toggle('open');

    
  }
}
