import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = {
      competencia: "Comunicacion verbal",
      porcentaje: "100%"
    };

    let skill2 = {
      competencia: "Creatividad",
      porcentaje: "90%"
    };

    let skill3 = {
      competencia: "Pensamiento crítico",
      porcentaje: "80%"
    };

    let skill4 = {
      competencia: "Organización",
      porcentaje: "70%"
    };

    let skill5 = {
      competencia: "Liderazgo",
      porcentaje: "90%"
    };

    this.skill.push(skill1);
    this.skill.push(skill2);
    this.skill.push(skill3);
    this.skill.push(skill4);
    this.skill.push(skill5);
     
  }


}
