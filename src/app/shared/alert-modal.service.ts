import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

enum AlertTypes {

  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string, dismissTimeout?: number) {

    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeout){

      setTimeout(() => bsModalRef.hide(), dismissTimeout);

    }

  }

  showAlertDanger(message: string) {

    this.showAlert(message,AlertTypes.DANGER);


  }

  showAlertSuccess(message: string) {

    this.showAlert(message,AlertTypes.SUCCESS, 2500);

  }

  showConfirm(title: string, body: string, okTxt?: string, cancelTxt?: string) {
    
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.body = body;

    if(okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if(cancelTxt) {

      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;

  }
}
