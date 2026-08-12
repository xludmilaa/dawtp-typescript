// Integrante: Armua Ludmila
// Tp 1 Desarrollo de Aplicaciones web


// Crear una interfaz “Animal” que posea el atributo “nombre”, 
// así como también la definición de un método “gritar” que retorne un string
// que representa el ruido que hace el animal al gritar:

interface Animal {
    nombre: string;
    gritar(): string;
  }
  
// Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”:
  
  class Perro implements Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    gritar(): string {
      return "¡Guau!";
    }
  
// Se agrega el metodo toString() para mostrar el nombre del 
//animal en la consola al imprimir el objeto, de lo contrario muestra "[object Object]":
   
    toString(): string {
      return `Perro ${this.nombre}`;
    }
  }
  
  class Gato implements Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    gritar(): string {
      return "¡Miau!";
    }
    toString(): string {
      return `Gato ${this.nombre}`;
    }
  }
  
  class Vaca implements Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    gritar(): string {
      return "¡Muuu!";
    }
    toString(): string {
      return `Vaca ${this.nombre}`;
    }
  }
  
  // Crear una constante “perro”, una constante “vaca”, y una constante “gato” 
  // que tengan como valor una instancia de la clase que corresponda 
  // y tengan declarado el tipo de datos correspondiente:
  
  const perro: Perro = new Perro("Emma");
  const vaca: Vaca = new Vaca("Molly");
  const gato: Gato = new Gato("Lulu");
  
  // Ejecutar el método “describirAnimal” para cada una de las constantes creadas (3 veces en total):
  
  function describirAnimal(animal: Animal): void {
    console.log(`${animal.toString()} dice: "${animal.gritar()}"`);
  }
  
  describirAnimal(perro);
  describirAnimal(vaca);
  describirAnimal(gato);
  
  
  // Crear un Enum “DiasSemana” que tenga como valores los días de la semana:
  
  enum DiasSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miércoles = "Miércoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sábado = "Sábado",
    Domingo = "Domingo",
  }
  
  
  // Crear una variable que pueda contener únicamente valores de tipo número o de tipo string. 
  // Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10:
  
  let jugador: number | string = "Messi";
  console.log("Nombre jugador:" + jugador);
  jugador = 10;
  console.log("Numero jugador:" + jugador);
  
  
  // Crear una clase genérica que implemente la siguiente interfaz:
  // interface Fila<T> {
  // agregar(elemento: T): void;
  // remover(): T | undefined;
  // }
  
  interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
  }
  
  // Crear una fila para números, una fila para strings, y una fila 
  // para animales (declarando los tipos correspondientes en cada variable):
  
  class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];
  
    agregar(elemento: T): void {
      this.elementos.push(elemento);
      console.log(`Se agregó el elemento: ${elemento}`);
    }
  
    remover(): T | undefined {
      return this.elementos.shift();
    }
  }
  
  // En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad.
  // En las otras 2 filas, agregar 3 elementos a elección en cada una. 
  // Para finalizar, remover un elemento de cada una de las 3 filas.
  
  const filaNumeros = new FilaGenerica<number>();
  filaNumeros.agregar(100);
  filaNumeros.agregar(200);
  filaNumeros.agregar(300);
  const filaStrings = new FilaGenerica<string>();
  filaStrings.agregar("No se");
  filaStrings.agregar("Que");
  filaStrings.agregar("Poner!");
  const filaAnimales = new FilaGenerica<Animal>();
  filaAnimales.agregar(perro);
  filaAnimales.agregar(vaca);
  filaAnimales.agregar(gato);
  const numeroRemovido = filaNumeros.remover();
  const stringRemovido = filaStrings.remover();
  const animalRemovido = filaAnimales.remover();
  console.log(`Número removido: ${numeroRemovido}`);
  console.log(`String removido: ${stringRemovido}`);
  console.log(`Animal removido: ${animalRemovido?.nombre}`);
