import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {IMensagem} from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService implements IMensagem {

  constructor(private snackBar: MatSnackBar) {
  }
  alert(mensagem: string): void {
    throw new Error("Method not implemented.");
  }

  info(mensagem: string): void {
    this.abrirSnack(mensagem,['info-snackbar']);
  }

  sucesso(mensagem: string): void {
    this.abrirSnack(mensagem, ['success-snackbar']);
  }

  erro(mensagem: string): void {
    this.abrirSnack(mensagem, ['error-snackbar']);
  }

  abrirSnack(mensagem: string, classesExtras: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = classesExtras;
    this.snackBar.open(mensagem, 'X', config);
  }


}
