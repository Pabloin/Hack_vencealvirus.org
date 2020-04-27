import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

const LANG_ES = 0;
const LANG_EN = 1;

@Component({
  selector: 'sube',
  templateUrl: './sube.component.html',
  styleUrls: ['./sube.component.scss']
})
export class SubeComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  idioma = LANG_EN

  txt_dataset = [ "Dataset", "Dataset" ];
  txt_links = [ "enlaces", "links" ];
  txt_titulo = [ "Subir Dataset", "Upload Dataset" ];
  txt_subir = [ "subir", "upload" ];

  txt_titulo_enlace = [ "Enviar Enlace", "Send a link"];
  txt_subir_otro = [ "Subir otro enlace", "Upload another link"];
  txt_subir_otro_ds = [ "Subir otro Dataset", "Upload another Dataset"];

  txt_enalce_subido_ok = [ "Enlace recibido ok", "Link Upload Ok" ]; 
  txt_dataset_subido_ok = [ "Dataset recibido ok", "Dataset Upload Ok" ]; 

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

      this.textoNombrePCH = (this.idioma === LANG_EN) ? "Enter the Name" : "ingrese un Nombre";
      this.textoCatPCH = (this.idioma === LANG_EN) ? "Enter a Category" : "ingrese una Categoría ";
      this.textoDescPCH = (this.idioma === LANG_EN) ? "Enter a Description" : "ingrese una Descripción ";
      this.textoDatasetArchPCH = (this.idioma === LANG_EN) ? "Add a File" : "ingrese un Archivo";
    } else {
      this.uploadDatasetOk = !this.uploadDatasetOk;
    }
  }

  doUploadEnlace() {
    if (this.textoNombre === "" 
      && this.textoCat === "" 
      && this.textoDesc === ""
      && this.textoEnlaceNombre === "") {

        this.textoNombrePCH = (this.idioma === LANG_EN) ? "Enter the Name" : "ingrese un Nombre";
        this.textoCatPCH = (this.idioma === LANG_EN) ? "Enter a Category" : "ingrese una Categoría ";
        this.textoDescPCH = (this.idioma === LANG_EN) ? "Enter a Description" : "ingrese una Descripción ";
        this.textoEnlaceNombre = (this.idioma === LANG_EN) ? "Add the link" : "ingrese el enlace"
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
