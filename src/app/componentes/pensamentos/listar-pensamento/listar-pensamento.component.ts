import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = ''
  mostrarFavoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  recarregarComponente() {
    this.mostrarFavoritos = false
    this.paginaAtual = 1
    this.titulo = 'Meu mural'

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.mostrarFavoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos)
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.mostrarFavoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
    });
  }

  filtrarFavoritos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.mostrarFavoritos = true
    this.titulo = 'Meus Favoritos'

    this.service.listar(
      this.paginaAtual,
      this.filtro,
      this.mostrarFavoritos
    ).subscribe((lista) => {
      this.listaPensamentos = lista
      this.listaFavoritos = lista
    })
  }
}

