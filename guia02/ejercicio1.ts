class Rombo{
    diagonalVertical: number;
    diagonalHorizontal: number;

    constructor(n1: number, n2: number){
        this.diagonalHorizontal = n1;
        this.diagonalVertical = n2;
    }

    calcular(){
        let area: number = this.diagonalHorizontal*this.diagonalVertical;
        console.log("El area es: " + area);
    }

}