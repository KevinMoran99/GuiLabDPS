var Empleado = /** @class */ (function () {
    function Empleado(n, s) {
        this.nombre = n;
        this.salario = s;
    }
    Empleado.prototype.calcularDescuento = function (descuento) {
        //Descuento debe ser un porcentaje, un valor entre 0 y 100
        if (descuento < 0 || descuento > 100) {
            console.log("El porcentaje de descuento proporcionado no es válido.");
        }
        else {
            var total = this.salario * (1 - (descuento * 0.01));
            console.log("El salario después de los descuentos es de $" + total);
        }
    };
    return Empleado;
}());
