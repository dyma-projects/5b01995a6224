import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  public currentCompteur: number;
  @Output() result = new EventEmitter<number>();
  @Input('initValeur')
  set initValeur(e) {
    this.currentCompteur = e;
  }
  constructor() {}
  ngOnInit() {}
  up() {
    this.currentCompteur++;
    this.sendResult();
  }
  sendResult() {
    this.result.emit(this.currentCompteur);
  }
  down() {
    this.currentCompteur--;
    this.sendResult();
  }
}
