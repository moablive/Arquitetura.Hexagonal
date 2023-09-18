import TerminalUtil from "@/app/util/terminalUtil"

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo")

    const tipoCarro = await TerminalUtil.selecao("Tipo de Carro?", [
        "ferrari",
        "fusca",
    ])

    while (true) {
        TerminalUtil.limpar()
        const continuar = await TerminalUtil.confirmacao("Deseja Continuar?")
        if (!continuar) return
    }
}
