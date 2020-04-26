import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  searchingBasico: boolean;
  searchingAvanzado: boolean;
  textoBasico: string;
  placeHolderBasico: string;

  textoAvTitulo: string;
  textoAvDesc: string;
  textoAvCat: string;

  textoAvTituloPCH: string;
  textoAvCatPCH: string;
  textoAvDescPCH: string;

  constructor() { }

  ngOnInit() {
    this.doClear();
  }

  doSearchBasico() {
    if (this.textoBasico === "") {
      this.placeHolderBasico = "ingrese un texto"
    } else {
      this.searchingBasico = !this.searchingBasico;
    }
  }

  doSearchAvanzado() {
    if (this.textoAvTitulo === "" && this.textoAvDesc === "" && this.textoAvCat === "") {
      this.textoAvTitulo = "";
      this.textoAvDesc = "";
      this.textoAvCat = "";

      this.textoAvTituloPCH = "ingrese un texto";
      this.textoAvCatPCH = "ingrese una categoria";
      this.textoAvDescPCH = "ingrese un descripcion";
    } else {
      this.searchingAvanzado = !this.searchingAvanzado;
    }
  }

  doClear() {
    this.searchingBasico = false;
    this.searchingAvanzado = false;
    this.textoBasico = "";
    this.placeHolderBasico = "";

    this.textoAvTitulo = "";
    this.textoAvDesc = "";
    this.textoAvCat = "";

    this.textoAvTituloPCH = "";
    this.textoAvCatPCH = "";
    this.textoAvDescPCH = "";
  }
}
