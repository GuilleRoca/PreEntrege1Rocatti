const tasaCliente = 0.50
const tasaNoCliente = 0.65
const montoMaximo = 500000
let monto
let cliente
let tasa
let tipoCliente = "inicio"
let exit = false
let exitMonto = false
let exitCuotas = false
let cantidadCuotas
let capital = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let interes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let amortizacion = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let montoCuota
let contador = 0

function cuotaCreditoFrances (monto , tasa , cantidadCuotas){
    return ((monto*(tasa/12)*((1+(tasa/12))**cantidadCuotas))/(((1+(tasa/12))**cantidadCuotas)-1));
}

while (exit === false){

    if (tipoCliente === "inicio"){
   
        tipoCliente = prompt (`Bienvenido al simulador de créditos \nPara conocer las tasas preferenciales \nIndique algunas de las siguientes opciones \n1. Soy Cliente - TASA 50% \n2. No soy cliente - TASA 65%\n3. Salir `)
    }

    if (tipoCliente === "3"){
        exit = true
        alert(`Ah seleccionado para salir del simulador. \nQue tenga buen día`)

    }else if(tipoCliente == null){
        exit = true
        alert(`Ah seleccionado para salir del simulador. \nQue tenga buen día`)

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
        exitMonto=false

        while (exitMonto === false){

            monto = prompt(`Como ustede ${cliente} tenemos una tasa promocional del ${tasa*100}% anual y un monto disponible máximo para acreditarle de $${montoMaximoCalculo} para pagarlo en hasta 36 cuotas \nSi desea salir, precione cancelar \nSi desea volver al menú anterior presione 0 \nSi desea continuar, el monto que desea adquirir`)

            if (monto == null){
                exitMonto=true
                exit = true
                alert(`Ah seleccionado para salir del simulador. \nQue tenga buen día`)
                break
            }else if (monto == "0"){
                exitMonto=true
                alert(`Volviendo al menu anterior`)
                tipoCliente = "inicio"

            }

            monto=parseInt(monto)

            if (monto > 0 && monto <= montoMaximoCalculo){
                exitCuotas = false
                while(exitCuotas===false){

                    cantidadCuotas = prompt(`Usted tiene pre-aprobado el monto solicitado de $${monto}\nSolo resta que seleccione las cantidad de cuotas en que desea devolver el crédito\nPuede seleccionar entre 1 y 36 cuotas\nIngrese la cantidad de cuotas en que queire devolver el crédito\nPara salir presiones CANCELAR \nSi desea volver al menú anterior presione 0`)
                    

                    montoCuota = cuotaCreditoFrances (monto , tasa , cantidadCuotas)
                    
                    if (cantidadCuotas == null){
                        exitMonto=true
                        exit = true
                        exitCuotas=true
                        alert(`Ah seleccionado para salir del simulador. \nQue tenga buen día`)
                    }else if (cantidadCuotas == "0"){
                        exitCuotas=true
                        alert(`Volviendo al menu anterior`)
                        
                    }else if (cantidadCuotas > 36){
                        alert(`Usted no posee autirización para solicitar un prestamos en ${cantidadCuotas} \nEl máximo es 36 cuotas`)

                    }else if(cantidadCuotas >= 1 && cantidadCuotas <= 36){
                        cantidadCuotas = parseInt(cantidadCuotas)
                        
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
                            
                            if (contador !=0 && contador == cantidadCuotas){
                                
                                email = prompt (`FELICITACIONES!!!\nSu crédito de $${monto} en ${cantidadCuotas} de $${montoCuota.toFixed(2)} a sido aprobado\n \nIngrese su e-mail - ejemplo@1234.com - \npara que podamos enviarle el detalle completo\ny un botón de confirmación \nDEBE ingresar el mail correctamente, de lo contrario\nNO recibirá el e-mail`)
                                
                                if(email == null){
                                    alert(`Usted canceló la operación \nQue tenga buen día`)
                                }else{
                                    alert(`La propuesta a sido enviada `)
                                }
                                exitCuotas=true
                                exit = true
                                exitMonto = true
                            }
                        }
                        
                    }else{
                        alert(`Ingresó un valor incorrecto`)
                    }
                }
            }else if ( monto > montoMaximoCalculo){
                alert(`Usted no posee autirización para solicitar un prestamos de $${monto} \nTiene pre-aprobado un crédito de $${montoMaximoCalculo}`)
            }else if (monto == "0"){
                exitCuotas=true   
            }
            else{
                alert(`Ah ingresado un valor no permitido \nVuelva a intentarlo`)
            }
            
            



        }

        exitCuotas = false



    }else {
        tipoCliente = prompt (`INGRESÓ UN VALOR INCORRECTO O VOLVER \nLas opciones posibles son 1 , 2 ó 3 \nIndique algunas de las siguientes opciones \n1. Soy Cliente - TASA 50% \n2. No soy cliente - TASA 65%\n3. Salir `)

    }
}