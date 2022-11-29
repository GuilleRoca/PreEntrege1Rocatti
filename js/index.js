const tasaCliente = 0.12
const tasaNoCliente = 0.65
const montoMaximo = 500000
let monto
let cliente
let tasa
let tipoCliente = "inicio"
let exit = false
let exitCuotas = false
let cantidadCuotas
let capital = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let interes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let amortizacion = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let interesPeriodico
let montoCuota
let contador = 0

while (exit === false){

    if (tipoCliente === "inicio"){
   
        tipoCliente = prompt (`Bienvenido al simulador de créditos \nPara conocer las tasas preferenciales \nIndique algunas de las siguientes opciones \n1. Soy Cliente - TASA 50% \n2. No soy cliente - TASA 65%\n3. Salir `)
    }

    if (tipoCliente === "3"){
        exit = true
    }else if(tipoCliente == null){
        exit = true
    }else if ( tipoCliente == "1" || tipoCliente == "2" ){

        
        if (tipoCliente == "1"){
            tasa=tasaCliente
            cliente = "es cliente"

            montoMaximoCalculo = montoMaximo


        }else if (tipoCliente == "2"){
            tasa=tasaNoCliente
            cliente= "no es cliente"
            montoMaximoCalculo = montoMaximo / 2

        }

        while (exitCuotas === false){

            monto = parseInt(prompt(`Como ustedes ${cliente} tenemos una tasa promocional para usted del ${tasa*100}% anual y un monto disponible máximo para acreditarte de $${montoMaximoCalculo} para pagarlo en hasta 36 cuotas \nSi desea salir, precione cancelar \nSi desea volver al menú anterior selecione 0 \nSi desea continuar, el monto que desea adquirir`))

            if (monto > 0 && monto <= montoMaximoCalculo){
                cantidadCuotas = parseInt ( prompt(`Usted tiene pre-aprobado el monto solicitado de $${monto}\nSolo resta que seleccione las cantidad de cuotas en que desea devolver el crédito\nPuede seleccionar entre 1 y 36 cuotas\nIngrese la cantidad de cuotas en que queire devolver el crédito`))
                alert(monto)
                alert(cantidadCuotas)
                montoCuota = ((monto*(tasa/12)*((1+(tasa/12))**cantidadCuotas))/(((1+(tasa/12))**cantidadCuotas)-1))
                
                alert(montoCuota)
                
                while (contador < cantidadCuotas){
                    if (contador == 0){
                        capital[0]=monto
                        interes[0] = capital[0] * (tasa/12)
                        amortizacion[0] = montoCuota - interes[0]
                    }else{
                        capital[contador] = capital[contador-1] - amortizacion[contador-1]
                        interes[contador] = capital[contador] * (tasa/12)
                        amortizacion[contador] = montoCuota - interes[contador]
                    }
                    
                    console.log(`Cuota ${contador+1} - Capital adeudado $${capital[contador].toFixed(2)} - Amortización $${amortizacion[contador].toFixed(2)} - Intereses $${interes[contador].toFixed(2)} - Cuota $${montoCuota.toFixed(2)} `)
                    contador = contador + 1
            
                }
                alert("todo OK")
            }
            
            
            exitCuotas=true



        }



    }else {
        alert("vovler a escribir")
        tipoCliente = prompt (`INGRESÓ UN VALOR INCORRECTO \nRecuerde que las únicas opciones son 1 , 2 ó 3 \nIndique algunas de las siguientes opciones \n1. Soy Cliente \n2. No soy cliente \n3. Salir `)

    }
    exit = true
}






alert(tipoCliente)