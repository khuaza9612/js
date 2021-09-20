class cliente extends Persona{

    static contadorcliente=0;

    constructor(fecha){
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