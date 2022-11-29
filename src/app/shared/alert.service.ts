import { Injectable } from '@angular/core';
import { FuseAlertType } from '@fuse/components/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  showAlert: boolean = false;

  constructor() { }

  showAlertMessage(type: FuseAlertType, message: string, view: boolean) {
    this.alert = {
      type: type,
      message: message || 'Ocurrio un error inesperado, consulte con el administrador!'
    };
    this.showAlert = view
  }
  
}
