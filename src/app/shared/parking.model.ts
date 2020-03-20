import { Time } from '@angular/common';
import { Car } from './car.model';

export class Parking {
    id: number;
    horaEntrada: Date;
    horaSaida: Date;
    tempoTotal: Time;
    valorTotal: number;
    carro: Car;
  }
