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

  textoNombre: string;
  textoCat: string;
  textoDesc: string;
  
  textoNombrePCH: string;
  textoCatPCH: string;
  textoDescPCH: string;
  
  textoDatasetArch: string;
  textoDatasetArchPCH: string;
  
  textoEnlaceNombre: string;
  textoEnlaceNombrePCH: string;
  
  uploadDatasetOk: boolean;
  uploadEnlaceOk: boolean;

  constructor() { }

  ngOnInit() {
    this.doClear();
  }

  doUploadDataset() {
    if (this.textoNombre === "" 
      && this.textoCat === "" 
      && this.textoDesc === ""
      && this.textoDatasetArch === "") {

      this.textoNombrePCH = "ingrese un Nombre";
      this.textoCatPCH = "ingrese una Categoría ";
      this.textoDescPCH = "ingrese una Descripción ";
      this.textoDatasetArchPCH = "ingrese un Archivo";
    } else {
      this.uploadDatasetOk = !this.uploadDatasetOk;
    }
  }

  doUploadEnlace() {
    if (this.textoNombre === "" 
      && this.textoCat === "" 
      && this.textoDesc === ""
      && this.textoEnlaceNombre === "") {

        this.textoNombrePCH = "ingrese un Nombre";
        this.textoCatPCH = "ingrese una Categoría ";
        this.textoDescPCH = "ingrese una Descripción ";
        this.textoEnlaceNombre = "ingrese el enlace"
    } else {
      this.uploadEnlaceOk = !this.uploadEnlaceOk;
    }
  }


  doReset() {
    this.uploadDatasetOk = false;
    this.uploadEnlaceOk = false;
    this.doClear();
  }

  doClear() {
    this.textoNombre = "";
    this.textoCat = "";
    this.textoDesc = "";
    this.textoDatasetArch = "";
  
    this.textoNombrePCH = "";
    this.textoCatPCH = "";
    this.textoDescPCH = "";
    this.textoDatasetArchPCH = "";

    this.textoEnlaceNombre = "";
    this.textoEnlaceNombrePCH = "";
  }

}
