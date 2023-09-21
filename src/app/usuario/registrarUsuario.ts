import TerminalUtil from "@/app/util/terminalUtil"
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import InverterSenhaCripto from "@/adpter/auth/InverterSenhaCripto";

export default async function registrarUsuario() {
    TerminalUtil.titulo("registrar Usuario");

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Guilherme Bonato')
    const email = await TerminalUtil.campoRequerido('e-Mail: ', 'guilherme@gmail.com')
    const senha = await TerminalUtil.campoRequerido('Senha: ','123456')
    const usuario: Usuario = { nome, email, senha }

    const ProvedorCriptografia = new InverterSenhaCripto()
    const casoDeUso = new RegistrarUsuario(ProvedorCriptografia)
    
    await casoDeUso.executar(usuario)

    TerminalUtil.sucesso('Usuario Registrado com Sucesso')
    await TerminalUtil.esperarEnter();

    try {
        await casoDeUso.executar(usuario)
    } catch (e: any) {
        TerminalUtil.erro(e.message)
    } finally {
        await TerminalUtil.esperarEnter();
    }
}
