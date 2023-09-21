import TerminalUtil from "@/app/util/terminalUtil"
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo("registrar Usuario");

    const id = await TerminalUtil.campoRequerido('ID: ')
    const nome = await TerminalUtil.campoRequerido('Nome: ')
    const email = await TerminalUtil.campoRequerido('e-Mail: ')
    const senha = await TerminalUtil.campoRequerido('Senha: ')

    const usuario: Usuario = {id, nome, email, senha}

    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso('Usuario Registrado com Sucesso')
    await TerminalUtil.esperarEnter();
}
