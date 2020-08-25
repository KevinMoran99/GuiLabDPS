import { Tipo } from './tipo';

export class Venta {
    constructor(
        public cantidad: number,
        public tipo: Tipo
    ) {}
}
