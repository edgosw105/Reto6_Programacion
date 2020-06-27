var btnReto1 = document.getElementById('btnReto1');
var btnReto2 = document.getElementById('btnReto2');
var btnReto3 = document.getElementById('btnReto3');
var btnReto4 = document.getElementById('btnReto4');
var btnReto5 = document.getElementById('btnReto5');
var btnReto6 = document.getElementById('btnReto6');
btnReto1.addEventListener('click', Reto1);
btnReto2.addEventListener('click', Reto2);
btnReto3.addEventListener('click', Reto3);
btnReto4.addEventListener('click', Reto4);
btnReto5.addEventListener('click', Reto5);
btnReto6.addEventListener('click', Reto6);

function Reto1()
{
  let total = 0;
  while (total <= 50) {
    let numero = prompt('Ingresa un numero: ');
    total = total + (parseInt(numero));
  }

  alert('El total ha pasado su limite, la sumatoria es de: ' + total);

}

function Reto2()
{
  let numero = 0;
  while (numero <= 42) {
    numero = prompt('Ingresa un numero: ');
  }

  alert('Has ingresado el ' +  numero + ' que es mayor a 42');
}

function Reto3()
{
  let num1 = parseInt(document.getElementById('txtReto3_1').value);
  let num2 = parseInt(document.getElementById('txtReto3_2').value);
  let total = num1+num2;
  let mostrar = true;

  while (mostrar) {
    let res = confirm('Desea agregar un nuevo numero a la suma?');
    if (res)
    {
      let num3 = prompt('Digite el nuevo número: ');
      total = total + parseInt(num3);
    }
    else
    {
      alert('Chao! la suma total es de: ' + total);
      mostrar = false;
    }
  }
}

function Reto4()
{
  let mostrar = true;
  let numeroInvitados = 0;

  while (mostrar) {
    let invitado = prompt('Ingrese el nombre del invitado: ');
    if (invitado != null) {
        numeroInvitados = numeroInvitados + 1;
    }

    let res = confirm('Desea agregar un nuevo invitado?');

    if (!res) {
      mostrar = false;
      alert('Has invitado a ' + numeroInvitados + ' personas a tu banquete!');
    }
  }
}

function Reto5()
{
  let numero_secreto = Math.ceil(Math.random()*100);
  let numero = 0;
  let intentos = 0;
  while (numero != numero_secreto)
  {
    numero = prompt('Adivina el número: ');
    intentos = intentos +1;
    if (numero != numero_secreto) {
      if (numero != null) {
        if (numero > numero_secreto)
        {
          alert('El numero es mayor al numero secreto!');
        }
        else
        {
          alert('El número es menor al numero secreto');
        }
      }

    }
    else
    {
        alert('Has adivinado en ' + intentos + ' intentos!');
    }
  }
}

function Reto6()
{
  let seguir = true;
  let elefantes = 1;
  let letraSingular = '1 elefante se balanceaba \n Sobre la tela de una araña \n Como veía que resistía \n Fue a llamar otro elefante';
  let letraPlural = ' elefantes se balanceaban \n Sobre la tela de una araña \n Como veían que resistía \n Fueron a llamar otro elefante';

  while (seguir)
  {
    let letra;
      if (elefantes == 1)
      {
        letra = letraSingular;
      }
      else
      {
        letra = String(elefantes) + letraPlural;
      }

      let cantidad = prompt(letra + '\n Cuántos elefantes se balancearán ahora?');

      if (parseInt(cantidad) == elefantes+1)
      {
        elefantes = elefantes +1;
        if (elefantes == 10) {
          alert('Felicitaciones, hemos llegado a 10');
          seguir = false; 
        }
      }
      else
      {
        alert('Te has equivocado :( \n vuelve a empezar');
        seguir = false;
      }
  }
}
