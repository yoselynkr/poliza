class poliza {
    constructor(id, mA, p) {
        this.identificacion = id;
        this.montoAsegurado = mA;
        this.porcentaje = p;
    }
}
class vida extends poliza {
    constructor(id, mA, p, e) {
        super(id, mA, p);
        this.edad = e;
    }
    cobertura() {
        return this.montoAsegurado * this.porcentaje
    }
    montoPagar() {
        if (this.edad <= 18)
            return this.cobertura() * 0.05
        else
            return this.cobertura()
    }

}

class vehiculo extends poliza {
    constructor(id, mA, p, a) {
        super(id, mA, p)
        this.anno = a
    }
    cobertura() {
        return this.montoAsegurado * this.porcentaje
    }

    montoPagar() {
        if (this.anno <= 2000)
            return this.cobertura() * 0.07
        else
            return this.cobertura() * 0.12
    }


}