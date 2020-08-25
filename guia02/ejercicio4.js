var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
    }
    Calculadora.prototype.sumar = function () {
        var total = this.numero1 + this.numero2;
        console.log(this.numero1 + " + " + this.numero2 + " = " + total);
    };
    Calculadora.prototype.restar = function () {
        var total = this.numero1 - this.numero2;
        console.log(this.numero1 + " - " + this.numero2 + " = " + total);
    };
    Calculadora.prototype.multiplicar = function () {
        var total = this.numero1 * this.numero2;
        console.log(this.numero1 + " x " + this.numero2 + " = " + total);
    };
    Calculadora.prototype.dividir = function () {
        var total = this.numero1 / this.numero2;
        console.log(this.numero1 + " / " + this.numero2 + " = " + total);
    };
    Calculadora.prototype.operacionesBasicas = function () {
        this.sumar();
        this.restar();
        this.multiplicar();
        this.dividir();
    };
    return Calculadora;
}());
