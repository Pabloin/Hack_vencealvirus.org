import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

const LANG_ES = 0;
const LANG_EN = 1;

@Component({
  selector: 'analiza',
  templateUrl: './analiza.component.html',
  styleUrls: ['./analiza.component.scss']
})
export class AnalizaComponent implements OnInit {

  idioma = LANG_EN

  txt_TREND = [ "Tendencia", "Trend" ];
  txt_SECTOR = [ "Sector", "Sector" ];
  txt_GEO = [ "GEO", "GEO" ];

  pattern: boolean = false

  txt_titulo1 = [ "Cantidad de Infecciones ", "Number of Infections " ]
  txt_titulo2 = [ "Edad Poblacion ", "Population Age" ]
  txt_titulo3 = [ "Principales Ciudades ", "Main cities" ]

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  constructor() { }

  ngOnInit() {
  }

}
