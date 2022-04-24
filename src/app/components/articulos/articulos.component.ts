import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ciudad } from '../../models/Ciudad';
import { ModalDialogService } from '../../services/modal-dialog.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  Mensajes = {
    SD: ' No se encontraron registros...',
    RD: ' Revisar los datos ingresados...',
  };

  Ciudades = [
    { IdCiudad: 1, Nombre: 'Córdoba' },
    { IdCiudad: 2, Nombre: 'Villa Carlos Paz' },
    { IdCiudad: 3, Nombre: 'Villa Allende' },
  ];
  FormasDePago = [
    { IdFormaDePago: 1, Nombre: 'Efectivo' },
    { IdFormaDePago: 2, Nombre: 'TarjetaVisa' },
  ];
  submitted: boolean = false;

  FormRegistro: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService
  ) {}

  ngOnInit() {
    this.FormRegistro = this.formBuilder.group({
      Descripcion: [null],
      FormaDePago: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(55),
        ],
      ],
      DireccionDeBusqueda: [
        null,
        [Validators.required, Validators.pattern('^\\d{1,7}$')],
      ],
      IdCiudad: [null, [Validators.required, Validators.pattern('^\\d{1,7}$')]],
      Referencia: [
        null,
        [Validators.required, Validators.pattern('^\\d{1,7}$')],
      ],
      DireccionDeDestino: [
        null,
        [Validators.required, Validators.pattern('^\\d{1,7}$')],
      ],
      IdCiudadDestino: [
        null,
        [Validators.required, Validators.pattern('^\\d{1,7}$')],
      ],
      ReferenciaD: [
        null,
        [Validators.required, Validators.pattern('^\\d{1,7}$')],
      ],
      FechaDelPedido: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
          ),
        ],
      ],
      Total: [null, []],
      Efectivo: [null, []],
      CVC: [null, []],
      NumeroTarjeta: [null, []],
      NombreApellido: [null, []],
      FechaVencimiento: [null, []],
    });
  }
}
