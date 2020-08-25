import { ResponsePlacaModel } from '../../../models/response-placa.model';
import { Action, createReducer, on } from '@ngrx/store';
import { SearchPlacaActions } from '.';



export interface State {
  error: string | null;
  loading: boolean;
  message: string | null;
  responsePlacaModel: ResponsePlacaModel;
}
export const initialState: State = {
  error: null,
  loading: false,
  message: null,
  responsePlacaModel: null
};

const searchPlacaReducer = createReducer(
  initialState,
  on(SearchPlacaActions.searchSearchPlaca, (state) => ({ ...state, error: null, loading: true })),
  on(SearchPlacaActions.searchSearchPlacaSuccess, (state, { responsePlacaModel }) => ({ ...state, loading: false, responsePlacaModel }))
);
const updateFlags = (state: State): State => {
  return {
    ...state,
    error: null,
    loading: true,
    message: null
  };
};
export function reducer(state: State | undefined, action: Action) {
  return searchPlacaReducer(state, action);
}
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
export const getMessageAction = (state: State) => state.message;
export const getSearchPlaca = (state: State) => state.responsePlacaModel;
