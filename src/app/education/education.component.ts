import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let edu1 = {
      fecha: "2014-2017",
      grado: "Secundaria",
      institucion: "ESBAO",
      
    };

    let edu2 = {
      fecha: "2017-2020",
      grado: "Bachillerato",
      institucion: "ESBAO",
    };


    let edu3 = {
      fecha: "2020-2022",
      grado: "Licenciatura",
      institucion: "Universidad Veracruzana",
    };

    this.education.push(edu1);
    this.education.push(edu2);
    this.education.push(edu3);
  }
}


