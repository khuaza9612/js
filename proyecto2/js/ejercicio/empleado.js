class empleado extends Persona{

    static contadorempleado=0;

    constructor(sueldo){
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