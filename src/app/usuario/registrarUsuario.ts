import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioPg from '../../adpter/db/RepositorioUsuarioPg';
import SenhaBcrypt from "@/adpter/auth/SenhaBcrypt";
import TerminalUtil from "@/app/util/terminalUtil"
import Usuario from "@/core/usuario/model/Usuario";

export default async function registrarUsuario() {
    const { campoRequerido, titulo, sucesso , erro, esperarEnter } = TerminalUtil

    titulo("registrar Usuario");

    const nome = await  campoRequerido('Nome: ')
    const email = await campoRequerido('e-Mail: ')
    const senha = await campoRequerido('Senha: ')
    const usuario: Usuario = { nome, email, senha }

    try {
        const Repositorio = new RepositorioUsuarioPg()
        const ProvedorCriptografia =  new SenhaBcrypt
        const casoDeUso = new RegistrarUsuario(Repositorio, ProvedorCriptografia)

        await casoDeUso.executar(usuario)

        sucesso('Usuario Registrado com Sucesso')
    } catch (e: any) {
        erro(e.message)
    } finally {
        await esperarEnter();
    }
}
