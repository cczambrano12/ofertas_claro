import { Action } from '@ngrx/store';


export enum OfertaActionTypes {
  SelectOfertas = '[Oferta] Select Ofertas',
  LoadOfertaList = '[Oferta] Select Ofertas',
}

export class SelectOfertas implements Action {
  readonly type = OfertaActionTypes.SelectOfertas;
  constructor(public payload: number) {}
}

export class LoadOfertaList implements Action {
  readonly type = OfertaActionTypes.LoadOfertaList;
}


export type OfertaActions = SelectOfertas | LoadOfertaList;

