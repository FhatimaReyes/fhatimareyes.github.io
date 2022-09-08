import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let interests1 = {
      interes:"Baile"
      
    };

    let interests2 = {
      interes:"Video juegos"

    };

    let interests3 = {
      interes:"Ciclismo"
      
    };

    let interests4 = {
      interes:"Tecnologías"

    };
    let interests5 = {
      interes:"Ciencia Ficción"
      
    };

    this.interests.push(interests1);
    this.interests.push(interests2);
    this.interests.push(interests3);
    this.interests.push(interests4);
    this.interests.push(interests5);
  }

}
