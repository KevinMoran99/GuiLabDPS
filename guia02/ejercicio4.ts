class Calculadora{
    numero1: number;
    numero2: number;

    constructor(n1: number, n2: number){
        this.numero1 = n1;
        this.numero2 = n2;
    }

    sumar() {
        let total = this.numero1 + this.numero2;
        console.log(this.numero1 + " + " + this.numero2 + " = " + total);
    }
    restar() {
        let total = this.numero1 - this.numero2;
        console.log(this.numero1 + " - " + this.numero2 + " = " + total);
    }
    multiplicar() {
        let total = this.numero1 * this.numero2;
        console.log(this.numero1 + " x " + this.numero2 + " = " + total);
    }
    dividir() {
        let total = this.numero1 / this.numero2;
        console.log(this.numero1 + " / " + this.numero2 + " = " + total);
    }

    operacionesBasicas(){
        this.sumar();
        this.restar();
        this.multiplicar();
        this.dividir();
    }

}