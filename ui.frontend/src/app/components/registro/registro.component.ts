import { MapTo } from '@adobe/cq-angular-editable-components';
import { Component, OnInit } from '@angular/core';

const RegistroComponentConfig = {
  emptyLabel: 'Registro Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

MapTo('angular-project/components/registro')(
  RegistroComponent,
  RegistroComponentConfig
);
