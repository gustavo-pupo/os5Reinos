import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public paragrafoIndex:string = 'Basicamente, esse conceito é aliado à taxonomia e ambos trabalham juntos na ideia de dividir e separar os seres vivos para aumentar a eficácia dos estudos sobre eles.'
}
