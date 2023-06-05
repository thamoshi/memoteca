import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit{
  @Input() pensamento = {
    conteudo: 'tic uon tic uei',
    autoria: 'charlie brown',
    modelo: 'modelo1'
  }

  constructor(){}

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >=256) {
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }

}
