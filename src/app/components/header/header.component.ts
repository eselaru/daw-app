import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faBars = faBars;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

}
