import { dictionary } from './../../../assets/data/dictionary';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  public words;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor() { }

  ngOnInit(): void {
    this.words = dictionary;
  }

}
