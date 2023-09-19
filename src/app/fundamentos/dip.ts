import TerminalUtil from "../util/terminalUtil";
import corrida from "@/core/fundamentos/Corrida";

export default async function dip() {
   TerminalUtil.titulo('DIP')
   corrida();
   await TerminalUtil.esperarEnter()
}