/**
 * @function valida un cbu
 * @param  {string} cbu
 * @return {boolean}
 */
function validarCBU(cbu){
    return validarLargoCBU(cbu) && validarCodigoBanco(cbu.substring(0,8)) && validarCuenta(cbu.substring(8,22));
}

function validarLargoCBU(cbu) {
    if (cbu.length != 22)
        return false;
    
    return true;
}

function validarCodigoBanco(codigo) {
    var suma;
    var diferencia;

    if (codigo.length != 8)
         return false;

    var banco = codigo.substring(0,3);
    var digitoVerificador1 = parseInt(codigo[3]);
    var sucursal = codigo.substring(4,7);
    var digitoVerificador2 = parseInt(codigo[7]);
    
    suma = parseInt(banco[0]) * 7 + parseInt(banco[1]) * 1 + parseInt(banco[2]) * 3 + digitoVerificador1 * 9 + parseInt(sucursal[0]) * 7 + parseInt(sucursal[1]) * 1 + parseInt(sucursal[2]) * 3;
    diferencia = 10 - (suma % 10);
    
    return diferencia == digitoVerificador2;
}

function validarCuenta(cuenta) {
    if(cuenta.length != 14)
        return false;
    
    var digitoVerificador = parseInt(cuenta[13]);
    var suma;
    var diferencia;
    
    suma = parseInt(cuenta[0]) * 3 + parseInt(cuenta[1]) * 9 + parseInt(cuenta[2]) * 7
            + parseInt(cuenta[3]) * 1 + parseInt(cuenta[4]) * 3 + parseInt(cuenta[5]) * 9
            + parseInt(cuenta[6]) * 7 + parseInt(cuenta[7]) * 1 + parseInt(cuenta[8]) * 3
            + parseInt(cuenta[9]) * 9 + parseInt(cuenta[10]) * 7 + parseInt(cuenta[11]) * 1
            + parseInt(cuenta[12]) * 3;
     diferencia = 10 - (suma % 10);
     
     return diferencia == digitoVerificador;
}