import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component implements OnInit {
  @ViewChild('in_') input_text;
  public valeur: string;

  constructor() {}

  ngOnInit() {}
  textChange() {
    this.valeur = this.input_text.nativeElement.value;
  }
}
