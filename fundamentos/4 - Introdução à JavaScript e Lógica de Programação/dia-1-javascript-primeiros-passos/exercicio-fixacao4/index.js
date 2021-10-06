//let estadoAprovada = 'aprovada';
//let estadoLista = 'lista';
let estadoReprovada = 'reprovada';

switch (estadoReprovada) {
   
   default:
      console.log("não se aplica");
   
   case 'aprovada':
       console.log("Parabéns, você foi aprovada(o)!");
      break

   case 'lista':
       console.log("Você está na nossa lista de espera");

      break
   case 'reprovada':
       console.log("Você foi reprovada(o)");
      break
}