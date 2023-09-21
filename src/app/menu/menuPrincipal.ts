import TerminalUtil from "@/app/util/terminalUtil"
import menuFundamentos from "./menuFundamentos"
import menuUsuario from "./menuUsuario"

export default async function menuPrincipal() {
    TerminalUtil.titulo("MENU PRINCIPAL")

    const [indice] = await TerminalUtil.menu([
        "1.Fundamentos ⏭️", 
        "2.Usuario ⏭️", 
        "Sair ❌"
    ])

    switch (indice) {
        case 0:
            await menuFundamentos()
            break
        case 1:
            await menuUsuario()
            break
        default:
            return
    }

    menuPrincipal()
}
