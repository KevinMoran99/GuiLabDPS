class Empleado{
    nombre: string;
    salario: number;

    constructor(n: string, s: number){
        this.nombre = n;
        this.salario = s;
    }

    calcularDescuento(descuento: number){
        //Descuento debe ser un porcentaje, un valor entre 0 y 100
        if (descuento < 0 || descuento > 100) {
            console.log("El porcentaje de descuento proporcionado no es válido.")
        }
        else {
            let total: number = this.salario * (1 - (descuento * 0.01));
            console.log("El salario después de los descuentos es de $" + total);
        }
    }

}