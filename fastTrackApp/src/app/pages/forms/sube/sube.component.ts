import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'sube',
  templateUrl: './sube.component.html',
  styleUrls: ['./sube.component.scss']
})
export class SubeComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  constructor() { }

  ngOnInit() {
  }

}
