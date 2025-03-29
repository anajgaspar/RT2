import * as readline from 'readline';
import Mensagens from './mensagens';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens()

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciar() {
    leitor.question(`Digite a operação que deseja:`, (operacao) => {
        if (operacao === "bhaskara") {
            leitor.question(`Informe os coeficientes a, b e c separados por espaço: `, (input) => {
                let [numero1, numero2, numero3] = input.split(' ').map(Number)
                let [x1, x2] = Bhaskara.calcularRaiz(numero1, numero2, numero3)
                console.log(`Raízes da equação: x1 = ${x1}, x2 = ${x2}`)
                iniciar()
            })
        } else if (operacao === 'sair') {
            console.log(`Até mais! Volte sempre :)`)
            leitor.close()
        } else {
            leitor.question(`Informe dois números separados por espaço: `, (input) => {
                let [numero1, numero2] = input.split(' ').map(Number)
                let calculo

                switch (operacao) {
                    case 'somar':
                        calculo = new Soma()
                        break
                    case 'subtrair':
                        calculo = new Subtracao()
                        break
                    case 'multiplicar':
                        calculo = new Multiplicacao()
                        break
                    case 'dividir':
                        calculo = new Divisao()
                        break
                    case 'potenciar':
                        calculo = new Potenciacao()
                        break
                    case 'radiciar':
                        calculo = new Radiciacao()
                        break
                    default:
                        console.log(`Operação não entendida :(`)
                        leitor.close()
                        return
                }

                if (input === 'sair') {
                    console.log(`Até mais! Volte sempre :)`)
                    leitor.close()
                } else {
                    console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                    iniciar()
                }
            })
        }
    })
}
mensagens.boasVindas()
mensagens.listarOpcoes()
iniciar()
