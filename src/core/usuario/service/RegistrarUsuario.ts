import CasoDeUso from '@/core/shared/CasoDeUso';
import Erros from '@/core/shared/Erros';
import Id from '@/core/shared/Id';
import Usuario from '@/core/usuario/model/Usuario';
import ProvedorCriptografia from './ProvedorCriptografia'
import RepositorioUsuarioEmMemoria from './RepositorioUsuarioEmMemoria';

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> { 

    constructor(
        private provedorCripto: ProvedorCriptografia
    ) {}

    async executar(usuario: Usuario): Promise<void> {
        const repo = new RepositorioUsuarioEmMemoria();
        const senhaCripto = this.provedorCripto.criptografar(usuario.senha)

        const usuarioExistente = await repo.buscarPorEmail(usuario.email);
        if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome, 
            email: usuario.email,
            senha: senhaCripto,
        };
        
        repo.inserir(novoUsuario)
        console.log(`\n\n${JSON.stringify(novoUsuario)}`);
    }
}