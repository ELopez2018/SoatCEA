import { createAction, props } from '@ngrx/store';
import { ApiActionModel } from '../../../models/api-action.model';
import { ResponsePlacaModel } from '../../../models/response-placa.model';



export const searchSearchPlaca = createAction(
  '[SearchPlaca] Search Search-Placa',
  props<{ action: ApiActionModel<ResponsePlacaModel> }>()
);

export const searchSearchPlacaSuccess = createAction(
  '[SearchPlaca] Search Search-Placa Success',
  props<{ responsePlacaModel: ResponsePlacaModel }>()
);

