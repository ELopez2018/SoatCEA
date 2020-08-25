import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

export const DatosVehiculosForm: FormGroup =  fb.group({
  descripcion: [null, Validators.required],
  modelo:  [null, Validators.required],
   placa: [null, Validators.required],
   tipo: [null, Validators.required],
   nroSerie: [],
   nroMotor: [],
   nroChasis: [],
   cc: [],
   pasajeros: [],
   peso: [],
   fechaExpedicion: [],
   fechaVigencia: []
});
