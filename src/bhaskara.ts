export default class Bhaskara {
    static calcularRaiz(numero1: number, numero2: number, numero3: number): [number | string, number | string] {
        const delta = numero2 * numero2 - 4 * numero1 * numero3

        if (delta < 0) {
            return ['Não existe raiz para este número', 'Não existe raiz para este número']
        }

        const x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1)
        const x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1)

        return [x1, x2]
    }
}