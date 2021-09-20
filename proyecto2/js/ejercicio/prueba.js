class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }   

    get apellido(){
        return this._apellido;
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad( edad ){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this.edad}`; 
    }
}
class empleado extends Persona{

    static contadorempleado=0;

    constructor(nombre,apellido ,edad,sueldo){
        super(nombre,apellido,edad);
        this._idempleado = ++empleado.contadorempleado;
        this._sueldo = sueldo;
       
    }

    get idempleado(){
        return this._idPersona;
    }

    get sueldo(){
        return this._sueldo;
    }

    set nombre(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' '+this._idempleado+' '+this._sueldo;
    }
}
class cliente extends Persona{

    static contadorcliente=0;

    constructor(nombre,apellido ,edad,fecha){
        super(nombre,apellido,edad);
        this._idcliente = ++cliente.contadorcliente;
        this._fecha = fecha;
       
    }

    get idcliente(){
        return this._idcliente;
    }

    get fecha(){
        return this._sueldo;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }
    toString(){
        return super.toString() + ' '+this._idcliente+' '+this._fecha;
    }
}

let persona1= new Persona('juan','perez',28);
console.log(persona1.toString());

let persona2= new Persona('kevin','huaza',24);
console.log(persona2.toString());

let empleado1= new empleado('sofia','murillo',11,500);
console.log(empleado1.toString());

let empleado2= new empleado('angie','huaza',15,5000);
console.log(empleado2.toString());

let cliente1= new cliente('elber','carabali',15,new Date());
console.log(cliente1.toString());