import { products } from '../../../assets/data/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products;

  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slides = [
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/alevia-20-mai-iunie-chb-7025.jpg'},
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/centrum-pachetomat-chb-333.png'},
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/la-roche-posay-anthelios-20-iunie-chb-9551.jpg'},
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/sanosan-20-mai-iunie-chb-1943.jpg'},
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/fixoderm-lo-iun-chb-1924.jpg'},
    {image: 'https://comenzi.farmaciatei.ro/images/campaigns/la-roche-posay-20-iunie-chb-8376.jpg'}
  ];

}
