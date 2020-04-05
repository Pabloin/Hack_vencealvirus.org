import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'analiza',
  templateUrl: './analiza.component.html',
  styleUrls: ['./analiza.component.scss']
})
export class AnalizaComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  constructor() { }

  ngOnInit() {
  }

}
