import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

export const FormClienteForm: FormGroup = fb.group({
  primerNombre: [null, Validators.required],
  segundoNombre: [null],
  primerApellido: [null, Validators.required],
  segundoApellido: [null],
  tipoDNI: [null, Validators.required],
  DNI: [null, Validators.required],
  departamento: [''],
  ciudad: [''],
  tipoDireccion: [''],
  direccion: [''],
  email: [null, Validators.required],
  celular: [null, Validators.required],
});
