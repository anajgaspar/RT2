// import Calculo from "./calculo";

// export default class Bhaskara extends Calculo {
//     public numero3: number
//     constructor(numero3: number) {
//         super()
//         this.numero3 = numero3
//     }
//     public calcular(numero1: number, numero2: number): number | number[] {
//         const delta = Math.pow(numero2, 2) - 4 * numero1 * this.numero3

//         const x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1)
//         const x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1)

//         if (delta === 0) {
//             return [x1]
//         } else {
//             return [x1, x2]
//         }
//     }
// }