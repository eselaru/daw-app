import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faTwitter = faTwitterSquare;
  faInstagram = faInstagram;
  faFacebook = faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
