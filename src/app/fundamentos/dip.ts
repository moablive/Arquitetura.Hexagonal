import TerminalUtil from '../util/terminalUtil';
import corrida from "@/core/fundamentos/Corrida";
import Carro from '@/core/fundamentos/Carro';
import Fusca from '@/core/fundamentos/Fusca';
import Ferrari from '@/core/fundamentos/Ferrari';
import Civic from '@/core/fundamentos/Civic';


export default async function dip() {
   TerminalUtil.titulo('DIP')

   const [tipo] = await TerminalUtil.selecao('Tipo de Carro',
   ['Fusca', 'Civic','Ferrari'])

   let carro: Carro
   
   switch (tipo) {
      case 0: 
         carro = new Fusca()
         break
      case 1: 
         carro = new Civic()
         break
      default: 
         carro = new Ferrari()
         break
   }

   corrida(carro);
   await TerminalUtil.esperarEnter()
}