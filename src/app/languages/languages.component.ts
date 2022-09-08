import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let language1 = {
      idioma:"Español",
      
    };

    let language2 = {
      idioma:"Inglés",
      
    };

    this.languages.push(language1);
    this.languages.push(language2);
  }

}
