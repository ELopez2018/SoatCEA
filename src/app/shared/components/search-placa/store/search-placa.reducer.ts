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
}

const configurationReducer = createReducer(
  // ||=====================[ Time Unit ]=====================||
    // =====[ SEARCH ]
  on(SearchPlacaActions.searchSearchPlaca, (state) => ({ ...state, error: null, loading: true })),
  on(SearchPlacaActions.searchSearchPlacaSuccess, (state, { responsePlacaModel }) => ({ ...state, loading: false, responsePlacaModel })),

  // =====[ CREATE ]
  on(TimeUnitActions.createTimeUnit, (state) => updateFlags(state)),
  on(TimeUnitActions.createTimeUnitSuccess, (state, { timeUnit }) => ({
    ...state,
    loading: false,
    message: "El registro fué creado correctamente...",
    timeUnitAll: [...state.timeUnitAll, timeUnit]
  })),

  // =====[ UPDATE ]
  on(TimeUnitActions.updateTimeUnit, (state) => updateFlags(state)),
  on(TimeUnitActions.updateTimeUnitSuccess, (state, { timeUnit }) => {
    const filter = state.timeUnitAll.filter(item => item.RowKey !== timeUnit.RowKey);
    return {
      ...state,
      loading: false,
      message: "El registro fué actualizado correctamente...",
      timeUnitAll: [...filter, timeUnit],
      timeUnit: null
    }
  }),
  // =====[ DELETE ]
  on(TimeUnitActions.deleteTimeUnit, (state) => updateFlags(state)),
  on(TimeUnitActions.deleteTimeUnitSuccess, (state, { timeUnit }) => {
    const timeUnitAll = state.timeUnitAll.filter(x => !(x.PartitionKey === timeUnit.PartitionKey && x.RowKey === timeUnit.RowKey))
    return {
      ...state,
      loading: false,
      message: "El registro fué eliminado correctamente...",
      error: null,
      timeUnitAll
    };
  }),

)
