export default class Mensagens {
    public boasVindas = () => {
        console.log('\nBem-vindo(a) à Calculadora Polimórfica!\n')
    }
    public listarOpcoes = () => {
        console.log(`Aqui você pode:`)
        console.log(`Somar, Subtrair, Multiplicar, Dividir, Potenciar, Radiciar e calcular Bhaskara\n`)
    }
    public comoUsar = () => {
        console.log(`Para usar, digite os números e a operação desejada separados por espaço como: "1 2 somar"`)
        console.log(`O resultado será a soma dos números: 3`)
        console.log(`Para encerrar digite "sair"\n`)
    }
}