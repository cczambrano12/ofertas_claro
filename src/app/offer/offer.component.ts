import { Component, OnInit } from '@angular/core';

import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import { OfertaState, selectOferta, selectListaOferta } from '../reducers/index';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit {

  ofertaN: string; 
  items = [{
    name: "uno",
    val: 1
  },
  {
    name: "dos",
    val: 2
  }]
  listaOferta$: Observable<string[]>
  oferta$: Observable<Oferta>

  //Inyecting the store giving the AppState type
  constructor(private store: Store<OfertaState>){
  }

  ngOnInit(): void {
    this.listaOferta$ = this.store.pipe(select(selectListaOferta));
    this.oferta$ = this.store.pipe(select(selectOferta));
  }

}
