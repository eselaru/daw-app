import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitterSquare;
  faInstagram = faInstagram;
  faFacebook = faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }
}
