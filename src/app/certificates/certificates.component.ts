import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificate : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let certificate1 = {
      certificado:"Diploma 6º Semestre Bachillerato",
      fecha:"2020"
    };
  
    let certificate2 = {
      certificado:"Certificado auxiliar Contaduría",
      fecha:"2020"
    };
  
    let certificate3 = {
      certificado:"Certificado Taller Informática",
      fecha:"2021"
    };
    
    this.certificate.push(certificate1);
    this.certificate.push(certificate2);
    this.certificate.push(certificate3);
    //this.workExperience.push(work4);
  }

}
