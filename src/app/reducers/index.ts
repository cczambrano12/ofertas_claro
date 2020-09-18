import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {Oferta} from '../models/oferta.model';
import { OfertaActionTypes, OfertaActions } from '../actions/oferta.actions';


export interface OfertaState {
  namesOfertas: string[],
  oferta: Oferta;
}


const defaultOfertaState: OfertaState = {
  namesOfertas: [],
  oferta: {
    id: "",
    name: "",
    prices: []
  }
}


//To update current state
const newState = (state, newData) => {
  return Object.assign({}, state, newData); // newData overrides state
}


export function ofertaReducer(state: OfertaState = defaultOfertaState, action: OfertaActions) {
  switch (action.type) {
    case OfertaActionTypes.SelectOfertas:
      return {
        // return newState(state, { text: action.payload })
      };
      case OfertaActionTypes.LoadOfertaList:
      return {
        // return newState(state, { text: action.payload })
      };
    default:
      return state;
  }
}


export const selectListaOferta = (state: OfertaState) => state.namesOfertas;
export const selectOferta = (state: OfertaState) => state.oferta;

export const metaReducers: MetaReducer<OfertaState>[] = !environment.production ? [] : [];
