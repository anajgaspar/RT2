import * as readline from 'readline';
import Mensagens from './mensagens';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Digite os números e a operação que deseja:`, (valor) => {
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = instrucoes[2]
        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        if (valor.trim() === 'sair') {
            console.log(`Até mais! Volte sempre :)`)
            leitor.close()
            return
        }

        switch (operacao) {
            case 'somar':
                let calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'dividir':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'potenciar':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            case 'radiciar':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break
            default:
                console.log(`Operação não entendida :(`)
        }
        leitor.close()
        mensagens.comoUsar()
        iniciar()
    })
}

mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()
