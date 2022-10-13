

 const Ejercicio1 = ()=>{   //falta terminarlo
let digito_placa = prompt("Digite el Ultimo digito de la placa:");
    
if(digito_placa== 1 || digito_placa==2){
        alert("El color de su calcomania es Amarilla")
    }

    if(digito_placa== 3 || digito_placa==4){
        alert("El color de su calcomania es Rosa")
    }

    if(digito_placa== 5 || digito_placa==6){
        alert("El color de su calcomania es Roja")
    }

    if(digito_placa== 7 || digito_placa==8){
        alert("El color de su calcomania es Verde")
    }

    if(digito_placa== 9 || digito_placa==0){
         alert("El color de su calcomania es Azul")
    }
}
//EJercicio1();

const ejercicio2 = () => { // me da error de respuesta
  //Ejercicio #2 No Chimbe

  alert("opciones: digite el numero del animal a trabajar");

  let Eleccion = prompt(
    "opciones: 1 = Elefantes. opcion 2 = Jirafa. opcion 3 = Chimpaces"
  );
  var lefante = 0,
    jirafa = 0,
    chimpances = 0;
  var categoria1 = 0,
    categoria2 = 0,
    categoria3 = 0;

  if (Eleccion >= 1 && Eleccion <= 3) {
    if (Eleccion == 1) {
      for (var i = 0; i < 5; i++) {
        let edad = prompt("Digite la edad del Elefante #" + (i + 1));
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else {
          if (edad >= 0 || edad <= 1) {
           parseFloat(categoria1 = categoria1 + 1)
          } else {
            if (edad > 1 || edad < 3) {
              parseFloat(categoria2 = categoria2 + 1)
            } else {
              if (edad >= 3) {
                parseFloat(categoria3 = categoria3 + 1);
              }
            }
          }
        }
      }
    }

    if (Eleccion == 2) {
      for (var i = 0; i < 5; i++) {
        let edad = prompt("Digite la edad del Jirafa #" + (i + 1));
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else {
          if (edad >= 0 || edad <= 1) {
            categoria1 = categoria1 + 1;
          } else {
            if (edad > 1 || edad < 3) {
              categoria2 = categoria2 + 1;
            } else {
              if (edad >= 3) {
                categoria3 = categoria3 + 1;
              }
            }
          }
        }
      }
    }
    if (Eleccion == 3) {
      for (var i = 0; i < 5; i++) {
        let edad = prompt("Digite la edad del chimpances #" + (i + 1));
        if (edad < 0) {
          alert("Edad Ingresada No Aceptada");
        } else {
          if (edad >= 0 || edad <= 1) {
            categoria1 = categoria1 + 1;
          } else {
            if (edad > 1 || edad < 3) {
              categoria2 = categoria2 + 1;
            } else {
              if (edad >= 3) {
                categoria3 = categoria3 + 1;
              }
            }
          }
        }
      }
    }
  } else {
    alert("El valor ingresado no esta Registrado");
  }

  let porcentaje1, porcentaje2, porcentaje3;
  console.log(categoria1);
 parseFloat( porcentaje1 = (categoria1 / 5) * 100);
 parseFloat( porcentaje2 = (categoria2 / 5) * 100);
 parseFloat( porcentaje3 = (categoria3 / 5) * 100);
  console.log(
    "El procentaje de animales con la edad de 0 a 1 es de : " + porcentaje1
  );
  console.log(
    "El procentaje de animales con la edad de mas de 1 y menos de 3 años es de : " +
      porcentaje2
  );
  console.log(
    "El procentaje de animales con la edad de 3 o mas años es de : " +
      porcentaje3
  );
};
//ejercicio2();


const Ejercicio3 = ()=>{ // funciona correctamente

    
    let horas_trabajadas = prompt("Digite las horas trabajadas");
            var total_pagar, pagar, pagar_extras;
        if (horas_trabajadas<= 40) {
            pagar = horas_trabajadas*20;
            alert("EL total a pagar al trabajador es :" + pagar)
        }if (horas_trabajadas>40) {
            extras = horas_trabajadas-40;
            pagar=40*20;
            pagar_extras = extras*25;
            total_pagar=pagar+pagar_extras;
            alert("El total a pagar al trabajador es " + total_pagar)
        }
    
    
    }
    //Ejercicio3();

    const Ejercicio4 =()=>{     //No esta termiando

        let N_estudiante_H = prompt("Digite la Cantidad de Estudiantes Hombre a Ingresar")
       let N_estudiante_M = prompt("Digite la Cantidad de Estudiantes Mujeres a Ingresar")
        var total_estudiantes, promedio_total, promedio_h, promedio_m;
    
        let total_h =[N_estudiante_H];
        console.log(total_h)
    }
    //Ejercicio4();

const Ejercicio5 = ()=>{ // no me sirve pero lo tengo todo

    let cant_Numeros, menor=0;

    parseFloat(cant_Numeros = prompt("Digite la cantidad de numeros a ingresar :"))
    for(let i =1; i<= cant_Numeros; i++) {
      
                parseFloat(numero =prompt("Digite un numero:"))
        if (i === 1) {
            numero == menor
        }else{
            if (numero<menor) {
                numero==menor  
            }
        }    
        i = i++;
    
        }
        typeof(console.log(menor))
        alert("El numero menor es :" + menor)
}
//Ejercicio5();

const Ejercicio8 = () =>{ // tampoco me funciona

    var valor_Cliente, descuento1, descuento2, descuento3, descuento4, descuento5, Cantidad_Clientes, edad, total_descuento;
    var total, total2, total3, total4, total5;

    parseFloat(valor_Cliente=prompt("El valor de la entrada es : "))
       parseFloat(Cantidad_Clientes = prompt("La cantidad de clientes es"))

        for (var index = 1; index <= Cantidad_Clientes; index++) {
            parseInt(edad= prompt("Digite la Edad :"))
            if (edad>=5) {       
                if (edad<=14) {
                   parseFloat( descuento1=valor_Cliente-(valor_Cliente*0.35))
                    parseFloat(total1 = ((valor_Cliente*0.35)+total1))
                }        
                if (edad>=15 || edad<20) {
                    parseFloat(descuento1=valor_Cliente-(valor_Cliente*0.25))
                    parseFloat(total2) = ((valor_Cliente*0.25)+total2)
                }
                if (edad>=20 || edad<46) {
                    parseFloat(descuento1=valor_Cliente-(valor_Cliente*0.10))
                    parseFloat(total3) = ((valor_Cliente*0.10)+total3)
                }
                if (edad>=46 || edad<66) {
                    parseFloat(descuento1=valor_Cliente-(valor_Cliente*0.25))
                    parseFloat(total4) = ((valor_Cliente*0.25)+total4)
                } 
                if (edad>=66) {
                    parseFloat(descuento1=valor_Cliente-(valor_Cliente*0.35))
                    parseFloat(total5) = ((valor_Cliente*0.35)+total5)
                }
                
                }else{
                    alert("Menores de 5 años no son permitidos. este registro se perdera")
                }
                if (index == Cantidad_Clientes) {
                    parseFloat(total_descuento) = parseFloat(total1+total2+total3+total4+total5)//no me funciona la suma
                    
                    alert("El descuento neto de todas las entradas fue de :" +total_descuento)
                    alert("El valor total de las entradas sin descuentos fue de :" +(valor_Cliente*Cantidad_Clientes))
                }
            }



}
//Ejercicio8();

const EJercicio10 = () => { // Funciona todo
  var candidato1, candidato2, candidato3, mayor, suma;

  candidato1 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #1")
  );
  if (isNaN(candidato1) || candidato1 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }

  candidato2 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #2")
  );
  if (isNaN(candidato2) || candidato2 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }
  candidato3 = parseInt(
    prompt("Digite la cantidad de votos obtenidos por el candidato #3")
  );
  if (isNaN(candidato3) || candidato3 === undefined) {
    alert("Dato no valido Digitelo de nuevo ");
    return;
  }
  suma = candidato1 + candidato2 + candidato3;
  console.log("candidato#1 = " + candidato1);
  console.log("candidato#2 = " + candidato2);
  console.log("candidato#3 = " + candidato3);
  if (suma == 50000) {
    if (candidato1 == candidato2 && candidato1 == candidato3) {
      alert("Todos los candidatos tienen la votacion de " + candidato1);
    }
    if (candidato1 == candidato2 && candidato3 > candidato2) {
      alert(
        "la votacion de los candidatos #1 y #2 es igual con un numero de " +
          candidato1 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato3
      );
      return
    }
    if (candidato1 == candidato3 && candidato2 > candidato1) {
      alert(
        "la votacion de los candidatos #1 y #3 es igual con un numero de " +
          candidato1 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato2
      );
      return
    }
    if (candidato2 == candidato3 && candidato1 > candidato2) {
      alert(
        "la votacion de los candidatos #2 y #3 es igual con un numero de " +
          candidato2 +
          " votos, pero el ganador es el candidato #3 con una votacion de " +
          candidato1
      );
      return
    }

    if (candidato1 > candidato2 && candidato1 > candidato3) {
      alert(
        "El candidato ganador es el Candidato #1, con la cantidad de votos :" + candidato1 )
         
     
      return
    }
    if (candidato2 > candidato1 && candidato2 > candidato3) {
      alert(
        "El candidato ganador es el Candidato #2, con la cantidad de votos :" +
          candidato2
      );
     
    }
    if (candidato3 > candidato1 && candidato3 > candidato2) {
      alert(
        "El candidato ganador es el Candidato #3, con la cantidad de votos :" +
          candidato3
      );
    }
  } else {
    alert(
      "La cantidad total de los votos de los 3 candidatos debe ser de 50000, la cantidad de votos entregados fue de " +
        suma
    );
  }
};
//EJercicio10();

const Ejercicio12_1 = ()=> {//Funciona todo
  //De los n elementos de la serie de fibonacci diga cuantos son pares, cuantos impares y cuantos ceros.
    var pares=0, impares=0, ceros=0;
    var Numero = parseInt(prompt("Digite el numero a aplicar la serie Fibonacci"))
    if (Numero === 0 ) {
      alert("EL unico elemento en este caso es el cero en contrado una vez")
      return
    }if (Numero ===1) {
      alert("la cantidad de pares en este casos son : 0 \nla cantidad de impares son: 1\nla cantidad de cero en este casos son : 1")
      return
    }
    vector = [0, 1];
    for (let i = 2; i <= Numero; i++) {
      vector[i]= vector[i-1] + vector[i-2]

    }
    for(i=0; i<Numero; i++){
      if (vector[i] %2 == 0) {
        pares = pares+1;
      }else{
        impares= impares+1;
      }

    }
    
    alert("La serie Fibbonacci quedo :"+vector+"\nla cantidad de pares en este casos son :"+pares+" teniendo encuenta el cero\nla cantidad de impares son:"+impares+"\nla cantidad de cero en este casos son :1")

    


}
//Ejercicio12_1();


const Ejercicio14 = ()=>{//Funciona todo


  const num1 = parseInt(prompt('Ingrese el primer número'));
  const num2 = parseInt(prompt('Ingrese el segundo número'));

  if (num1 <=0 && num2 <=0) {
    alert("Digite valores superiores a cero")
    
  }
      const mcd = MCD(num1, num2);
    alert("El maximo como un divisor entre "+num1+" y "+ num2 +  " es " + mcd)
  
  }

const MCD = (num1, num2) => {

  let mcd = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
          mcd = i;
      }
  }
  return mcd;
}

//Ejercicio14();
        

const Ejercicio15 = () => { //Funciona todo

  var Pais_A = 25;
  var   Pais_B = 19.9;
  var N_años = 0, final=0 ;
    
 

    while (Pais_A>Pais_B) {
        
        Pais_A = Pais_A + (Pais_A * 0.02);
        Pais_B = Pais_B + (Pais_B * 0.03);
        N_años= N_años+1;
    }        
         
     
         final = 1994 + N_años
        typeof console.log("años total=" + final);
        console.log(N_años);
        alert(
          "La cantidad de años que se necesitaron para que el pais B superara la poblacion del Pais A es de " +
            (N_años ) +
            " lo que significa que ocurrio en el año " +
            final
        );
        }

//Ejercicio15();
