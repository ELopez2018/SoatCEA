import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
// import { environment } from '@environments/environment';
import * as fromAppRoot from '../store/index';
import { ApiActionModel } from '@models/common/api-action-model';
import { CityModel } from '@models/configuration/geolocalization-city.model';
import { GeolocalizationActions, TimeUnitActions } from '@actions/index';
import { CountryModel } from '@models/configuration/geolocalization-country.model';
import { StateModel } from '@models/configuration/geolocalization-state.model';
import { TimeUnitModel } from '@models/configuration/timeUnit.model';

@Injectable({
  providedIn: 'root'
})

export class SearchPlacaFacadeService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _onAction: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private store: Store<fromAppRoot.State>
  ) { }

  // ==========={ LOADINGS }
  getIsLoading$(): Observable<boolean> {
    return this._isLoading;
  }
  setIsLoading$(value: boolean) {
    this._isLoading.next(value)
  }


  // ==========={ SEARCHES }

  searchById(rowKey: string, partitionKey: string): void {
    const action: ApiActionModel<TimeUnitModel> = {
      url: environment.API_REQUEST_MANAGEMENT + `/timeUnitById?PartitionKey=` + partitionKey + `&RowKey=` + rowKey
    }
    this.store.dispatch(TimeUnitActions.searchTimeUnit({ action }));
  }

  // ==========={ GETS }
  getCurrentItem$(): Observable<TimeUnitModel> {
    return this.store.select(fromAppRoot.getTimeUnit)
  }
  getAll$(): Observable<TimeUnitModel[]> {
    return this.store.select(fromAppRoot.getTimeUnitAll).pipe(
      tap(() => this._isLoading.next(false))
    )
  }
  // ==========={ SELECT }
  select(timeUnit: TimeUnitModel): void {
    this.store.dispatch(TimeUnitActions.selectTimeUnit({ timeUnit }));
  }

  // ==========={ RESETS }
  reset(items?: TimeUnitModel[]): void {
    this.store.dispatch(TimeUnitActions.searchAllTimeUnitSuccess({ timeUnitAll: items }))
  }
  resetSelected(item?: TimeUnitModel): void {
    this.store.dispatch(TimeUnitActions.searchTimeUnitSuccess({ timeUnit: item }))
  }
  getOnAction$(): Observable<boolean> {
    return this._onAction;
  }
  setOnAction$(value: boolean) {
    this._onAction.next(value)
  }

}
