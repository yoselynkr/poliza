class poliza {
    constructor(id, mA, pC) {
        this.identificacion = id;
        this.montoAsegurado = mA;
        this.porcentajeCobertura = pC;
    }
}
class vida extends poliza {
    constructor(id, mA, pC, e) {
        super(id, mA, pC);
        this.edad = e;
    }
    cobertura() {
        return this.montoAsegurado * this.porcentajeCobertura
    }
    montoPagar() {
        if (this.edad <= 18)
            return this.cobertura() * 0.05
        else
            return this.cobertura()
    }

}

class vehiculo extends poliza {
    constructor(id, mA, pC, a) {
        super(id, mA, pC)
        this.anno = a
    }
    cobertura() {
        return this.montoAsegurado * this.porcentajeCobertura
    }

    montoPagar() {
        if (this.anno <= 2000)
            return this.cobertura() * 0.07
        else
            return this.cobertura() * 0.12
    }

}

class Aseguradora {
    constructor(cP, aM) {
        this.contPoliza = cP
        this.acumMontoPagar = aM
    }

    porcesar(p) {
        this.acumMontoPagar += p.montoPagar()
        this.contPoliza++
    }

    promedio() {
        return this.acumMontoPagar / this.contPoliza
    }

}

function main() {

    let salida = document.getElementById("salida")
    let poliza1 = new vida(22, 1000,"80%",15)
    let poliza2 = new vida(11, 500, "90%", 22)
    let poliza3 = new vida(55, 200, "70%", 18)
    let poliza4 = new vida(88, 1500, "90%", 30)

    let poliza5 = new vehiculo(33, 2000, "80%", 2000)
    let poliza6 = new vehiculo(90, 1500, "90%", 2005)
    let poliza7 = new vehiculo(77, 1000, "90%", 1995)
    let poliza8 = new vehiculo(44, 2500, "85%", 2010)

    aseguradora.porcesar(poliza1)
    aseguradora.porcesar(poliza2)
    aseguradora.porcesar(poliza3)
    aseguradora.porcesar(poliza4)
    aseguradora.porcesar(poliza5)
    aseguradora.porcesar(poliza6)
    aseguradora.porcesar(poliza7)
    aseguradora.porcesar(poliza8)

    let aseguradora = new Aseguradora(0, 0)


    salida.innerHTML = "Poliza <br>"
    salida.innerHTML += `${poliza1.identificacion} ${poliza1.montoAsegurado} ${poliza1.edad} ${poliza1.porcentajeCobertura} ${poliza1.cobertura()} ${poliza1.montoPagar()} <br>`
    salida.innerHTML += `${poliza2.identificacion} ${poliza2.montoAsegurado} ${poliza2.edad} ${poliza2.porcentajeCobertura} ${poliza2.cobertura()} ${poliza2.montoPagar()} <br>`
    salida.innerHTML += `${poliza3.identificacion} ${poliza3.montoAsegurado} ${poliza3.edad} ${poliza3.porcentajeCobertura} ${poliza3.cobertura()} ${poliza3.montoPagar()} <br>`
    salida.innerHTML += `${poliza4.identificacion} ${poliza4.montoAsegurado} ${poliza4.edad} ${poliza4.porcentajeCobertura} ${poliza4.cobertura()} ${poliza4.montoPagar()} <br>`
    salida.innerHTML += `${poliza5.identificacion} ${poliza5,montoAsegurado} ${poliza5.porcentajeCobertura} ${poliza5.anno} ${poliza5.cobertura()} ${poliza5.montoPagar()} <br>`
    salida.innerHTML += `${poliza6.identificacion} ${poliza6.montoAsegurado} ${poliza6.porcentajeCobertura} ${poliza6.anno} ${poliza6.cobertura()} ${poliza6.montoPagar()} <br>`
    salida.innerHTML += `${poliza7.identificacion} ${poliza7.montoAsegurado} ${poliza7.porcentajeCobertura} ${poliza7.anno} ${poliza7.cobertura()} ${poliza7.montoPagar()} <br>`
    salida.innerHTML += `${poliza8.identificacion} ${poliza8.montoAsegurado} ${poliza8.porcentajeCobertura} ${poliza8.anno} ${poliza8.cobertura()} ${poliza8.montoPagar()} <br>`

    salida.innerHTML += `Total pagado: ${aseguradora.acumMontoPagar}`
    salida.innerHTML += `Total de polizas: ${aseguradora.contPoliza}`
    salida.innerHTML += `Promedio de pagos: ${aseguradora.promedio()}`

}



main()