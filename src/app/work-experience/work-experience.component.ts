import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  

 let work1 = {
  fecha: "2017-2019",
  ubicacion: "Córdoba, Ver",
  puesto: "Waiter", 
  empresa: "Banquetería",
  logros: [
        {descripcion: "Organizador de eventos"},
        {descripcion: "Colaboraciones digitales"}
  ]
 };

 let work2 = {
    fecha: "2019-2020",
    ubicacion: "Córdoba, Ver",
    puesto: "Home Office", 
    empresa: "Amazon",
    logros: [
      {descripcion: "Diseño de interfaces"},
      {descripcion: "Colaboraciones digitales"}
]
   };


 let work3 = {
    fecha: "2020-2022",
    ubicacion: "Córdoba, Ver",
    puesto: "Waiter", 
    empresa: "Granero Steak",
    logros: [
      {descripcion: "Colaboraciones proactivas"},
      {descripcion: "Servicio al cliente"}
]
   };

  this.workExperience.push(work1);
  this.workExperience.push(work2);
  this.workExperience.push(work3);
  }
}
