'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');//file sistem para leer achivos del sistema 

var extensiones = { //extensiones de lo archivo o cosas a enviar 
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4',
    'descarga': 'text/plain',
    'js': 'application/javascript',

}

var dato = "";
var dato2 = "";
function servidor(pedido, respuesta) {
    //
    var objetoUrl = url.parse(pedido.url);
    var camino = 'recursos' + objetoUrl.pathname;
    if (camino == 'recursos/') {
        camino = 'recursos/index.html';
    }
    fs.readFile(camino, (error, contenido) => {
        if (error) {
            respuesta.writeHead(500, { 'Content-Type': 'text/html' })
            respuesta.write('<h1>Error Interno Servidor</h1>');
            respuesta.end();

        }
        else {
            var vec = camino.split('.');
            var extension = vec[vec.length - 1];
            var extensionMime = extensiones[extension];
            respuesta.writeHead(200, { 'Content-Type': extensionMime });

            if (extension == 'html') {
                var arreglo_parametros = [];
                if (pedido.url.indexOf("?") > 0) {
                    var datos_url = pedido.url.split("?");
                    arreglo_parametros = datos_url[1].split("&");
                    for (var i = arreglo_parametros.length - 1; i >= 0; i--) {

                        var parametro = arreglo_parametros[i];
                        var datos_parametro = parametro.split('=');
                        console.log(datos_parametro);
                        dato += datos_parametro[1] + ",";
                        dato2 += datos_parametro[0] + ",";

                        var miArreglo = [];
                        var miArreglo2 = [];
                        miArreglo.push(dato);
                        miArreglo2.push(dato2);


                    }

                    var arreglo_cantidades = [];
                    var arreglo_txts = [];

                    var cantidades_final = [];
                    var nombres_final = [];

                    arreglo_cantidades = miArreglo[0].split(",");
                    arreglo_txts = miArreglo2[0].split(",");


                    // Elimina el último objeto del arreglo
                    arreglo_cantidades.pop();
                    arreglo_txts.pop();

                    // Para invertir los arreglos
                    cantidades_final.reverse();
                    nombres_final.reverse();

                    // Guarda en cada variable desde la posición 3 (Esto se hace debido a que se realiza doble petición - en nuestro caso -)
                    cantidades_final = arreglo_cantidades.slice(0);
                    nombres_final = arreglo_txts.slice(3);

                    console.log("Holiiiiiiii: " + cantidades_final.length);
                    console.log("Holoooooooo: " + nombres_final.length);



                    // console.log("Tamaño cantidades: " + cantidades_final[0]);
                    // console.log("Tamaño txts: " + nombres_final[0]);

                    /**
                     * Aqui inicia el calculo de productos
                     */

                    // Calculo producto 1

                    function darCalcularPrecio_1() {
                        var vacia = cantidades_final[11];
                        var cantidad = parseInt(cantidades_final[11]);
                        var total_compra_normal = cantidad * 20000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }

                    // Calculo producto 2

                    function darCalcularPrecio_2() {
                        var vacia = cantidades_final[10];
                        var cantidad = parseInt(cantidades_final[10]);
                        var total_compra_normal = cantidad * 40000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 3

                    function darCalcularPrecio_3() {
                        var vacia = cantidades_final[9];
                        var cantidad = parseInt(cantidades_final[9]);
                        var total_compra_normal = cantidad * 40000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 4

                    function darCalcularPrecio_4() {
                        var vacia = cantidades_final[8];
                        var cantidad = parseInt(cantidades_final[8]);
                        var total_compra_normal = cantidad * 25000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 5

                    function darCalcularPrecio_5() {
                        var vacia = cantidades_final[7];
                        var cantidad = parseInt(cantidades_final[7]);
                        var total_compra_normal = cantidad * 30000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 6

                    function darCalcularPrecio_6() {
                        var vacia = cantidades_final[6];
                        var cantidad = parseInt(cantidades_final[6]);
                        var total_compra_normal = cantidad * 35000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }

                    // Calculo producto 7

                    function darCalcularPrecio_7() {
                        var vacia = cantidades_final[5];
                        var cantidad = parseInt(cantidades_final[5]);
                        var total_compra_normal = cantidad * 40000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }

                    // Calculo producto 8

                    function darCalcularPrecio_8() {
                        var vacia = cantidades_final[4];
                        var cantidad = parseInt(cantidades_final[4]);
                        var total_compra_normal = cantidad * 20000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }

                    // Calculo producto 9

                    function darCalcularPrecio_9() {
                        var vacia = cantidades_final[3];
                        var cantidad = parseInt(cantidades_final[3]);
                        var total_compra_normal = cantidad * 40000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }

                    // Calculo producto 10

                    function darCalcularPrecio_10() {
                        var vacia = cantidades_final[2];
                        var cantidad = parseInt(cantidades_final[2]);
                        var total_compra_normal = cantidad * 35000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 10

                    function darCalcularPrecio_11() {
                        var vacia = cantidades_final[1];
                        var cantidad = parseInt(cantidades_final[1]);
                        var total_compra_normal = cantidad * 25000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    // Calculo producto 10

                    function darCalcularPrecio_12() {
                        var vacia = cantidades_final[0];
                        var cantidad = parseInt(cantidades_final[0]);
                        var total_compra_normal = cantidad * 30000;
                        var fin = 0;

                        if (vacia == "") {
                            fin = 0;
                            return fin;
                        }
                        else if (cantidad == 0) {

                            fin = 0;
                            return fin;
                        }
                        else if (cantidad >= 10) {
                            var descuento = total_compra_normal * 0.1;
                            var total_con_descuento = total_compra_normal - descuento;

                            fin = total_con_descuento;
                            return fin;
                        }
                        else {
                            if (cantidad > 1) {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                            else {
                                descuento = 0;

                                fin = total_compra_normal;
                                return fin;
                            }
                        }

                    }


                    function darCalcularTotal() {

                        var p1 = darCalcularPrecio_1();
                        var p2 = darCalcularPrecio_2();
                        var p3 = darCalcularPrecio_3();
                        var p4 = darCalcularPrecio_4();
                        var p5 = darCalcularPrecio_5();
                        var p6 = darCalcularPrecio_6();
                        var p7 = darCalcularPrecio_7();
                        var p8 = darCalcularPrecio_8();
                        var p9 = darCalcularPrecio_9();
                        var p10 = darCalcularPrecio_10();
                        var p11 = darCalcularPrecio_11();
                        var p12 = darCalcularPrecio_12();

                        var miTotal = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;
                        //var miTotal = p1 + p2 + p3;
                        return miTotal;
                        //var miTotal = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12;
                        //parrafo_total.innerHTML = "El total a pagar por toda su compra es:  <strong>$" + formatNumber.new(miTotal) + "</strong>";
                    }

                    /**
                     * Devuelve un número decimal en formato de miles.
                     */
                    var formatNumber = {
                        separador: ".", // separador para los miles
                        sepDecimal: ',', // separador para los decimales
                        formatear: function (num) {
                            num += '';
                            var splitStr = num.split('.');
                            var splitLeft = splitStr[0];
                            var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
                            var regx = /(\d+)(\d{3})/;
                            while (regx.test(splitLeft)) {
                                splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
                            }
                            return this.simbol + splitLeft + splitRight;
                        },
                        new: function (num, simbol) {
                            this.simbol = simbol || '';
                            return this.formatear(num);
                        }
                    }

                    var totalito = darCalcularTotal();
                    dato = formatNumber.new(totalito);

                    /**
                     * Aqui termina el calculo de productos
                     */


                }
                else {
                    dato = "";
                }

                var textoHtml = contenido.toString();
                textoHtml = textoHtml.replace("{variable1}", "" + dato);

                respuesta.write(textoHtml);
                respuesta.end();
            }
            else {
                respuesta.write(contenido);
                respuesta.end();
            }
        }
    });
}
var servidor = http.createServer(servidor);
servidor.listen(3000, 'localhost', () => {
    console.log("Servidor ejecutandose en el puerto 3000")
});