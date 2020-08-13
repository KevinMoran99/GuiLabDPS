var Rombo = /** @class */ (function () {
    function Rombo(n1, n2) {
        this.diagonalHorizontal = n1;
        this.diagonalVertical = n2;
    }
    Rombo.prototype.calcular = function () {
        var area = this.diagonalHorizontal * this.diagonalVertical;
        console.log("El area es: " + area);
    };
    return Rombo;
}());
