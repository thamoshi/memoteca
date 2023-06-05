import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit{
  listaPensamentos = [
    {
      conteudo: 'tic uon tic uei',
      autoria: 'charlie brown',
      modelo: 'modelo1'
    },
    {
      conteudo: 'salve natalina',
      autoria: 'menino',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'twitch chat',
      modelo: 'modelo1'
    }
  ]

  constructor(){}

  ngOnInit(): void {

  }

}
