import TerminalUtil from "@/app/util/terminalUtil"
import Carro from "@/core/fundamentos/Carro"
import Ferrari from "@/core/fundamentos/Ferrari"
import Fusca from "@/core/fundamentos/Fusca"

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await TerminalUtil.selecao(
        "Tipo de Carro?", 
        ["ferrari","fusca"]
    )

    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca()

    while (true) {
        TerminalUtil.limpar()

        TerminalUtil.exibirChaveValor(
            'Velocidade Maxima: ',
            `${carro.velocidadeMaxima} km/h`
        )

        TerminalUtil.exibirChaveValor(
            'Velocidade Atual: ',
            `${carro.velocidadeAtual} km/h`
        )

        const [opcao] = await TerminalUtil.selecao(
            "Qual opção?",
            ["acelerar", "frear"]
        )

        opcao === 0 ? carro.acelerar() : carro.frear()

        const continuar = await TerminalUtil.confirmacao("Deseja Continuar?")
        if (!continuar) return
    }
}
